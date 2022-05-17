const queue = require('./queue');
const EstoqueService = require('../services/estoqueServices');
const Database = require('../db/repositories/firebaseRepository');
const moment = require('moment');
const LocalService = require('../services/localServices');
class RabbitEstoque{
    estoqueService = new EstoqueService();
    localService = new LocalService();
    firebase = new Database();

    async relacional (body, type){
        let response;
        var initial;
        const date = moment().toDate();

        if(type === 'get'){
            console.log('get');
            queue.consume('Relacional', message => {
                console.log("processing " + message.content.toString())
            })
            return await this.estoqueService.list();
        }

        if(type === 'post' || type === 'put' ){
            var index = await this.firebase.select_index_reposicao_estoque();
        }

        if(type === 'deposito'){
            response = await this.localService.get(body.id);
            initial = response.dataValues.quantidade
            var adicional = (initial + body.quantidadeAnterior);
            console.log("adicional", adicional);
            var index = await this.firebase.select_index_reposicao_prateleira();
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
                    this.estoqueService.create(body);
                break;

                case 'put': 
                    console.log('put');
                    this.estoqueService.update(body.id, body);
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

                case 'deposito': 
                    console.log('deposito');
                    this.estoqueService.update(body.id, body)
                    this.firebase.insert_reposicao_prateleira(index, body.nome, date.toString(), body.quantidadeAnterior);
                    this.firebase.update_index_reposicao_prateleira(index + 1);
                    const json = {
                        id: body.id,
                        nome: body.nome,
                        quantidade: adicional,
                    }
                    console.log('json', json);
                    this.localService.update(body.id, json);
                break;

            }
        })

    }

}
module.exports = RabbitEstoque;



