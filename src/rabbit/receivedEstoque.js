const queue = require('./queue');
const EstoqueService = require('../services/estoqueServices');
const Database = require('../db/repositories/firebaseRepository');
const moment = require('moment');

class RabbitEstoque{
    estoqueService = new EstoqueService();
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
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

                case 'put': 
                    console.log('put');
                    this.estoqueService.update(body.id, body)
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

            }
        })

    }

}
module.exports = RabbitEstoque;



