const queue = require('./queue');
const ProdutosService = require('../services/produtosServices');
const Database = require('../db/repositories/firebaseRepository');
const moment = require('moment');
const EstoqueRepository = require('../db/repositories/estoqueRepository');


class RabbitProduto{
    produtosService = new ProdutosService();
    estoqueRepository = new EstoqueRepository();
    firebase = new Database();

    async relacional (body, type){
        let response;
        var initial;
        const date = moment().toDate();
        
        if(type === 'get'){
            queue.consume('Relacional', message => {
                console.log("processing " + message.content.toString())
            })
            return await this.produtosService.list();
        }

        if(type === 'put' || type === 'post'){
            var index = await this.firebase.select_index_reposicao_estoque();
            var initialProduto = await this.produtosService.get(body.id);
            var initialEstoque = await this.estoqueRepository.get(body.id);
        }

        console.log('Rabbit consumer on')
        queue.consume('Relacional', message => {
            console.log("processing " + message.content.toString());
            switch(type){
                case 'get': 
                    console.log('get');
                break;

                case 'post': 
                    console.log('post');
                    this.produtosService.create(body);
                    this.estoqueRepository.createProduto(body);
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

                case 'put': 
                    console.log('put');
                    const jsonProduto = {
                        id: body.id,
                        nome: body.nome,
                        quantidade: parseInt(initialProduto.quantidade) + body.quantidade,
                        lote: body.lote,
                        data_fabricacao: body.data_fabricacao,
                        data_validade: body.data_validade
                    }
                    this.produtosService.update(body.id, jsonProduto);
                    const jsonEstoque = {
                        id: body.id,
                        nome: body.nome,
                        quantidade: parseInt(initialEstoque.quantidade) + body.quantidade
                    }

                    this.estoqueRepository.update(body.id, jsonEstoque);
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

            }
        })
    }

}
module.exports = RabbitProduto;
