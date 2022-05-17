const queue = require('./queue');
const LocalService = require('../services/localServices');
const Database = require('../db/repositories/firebaseRepository');
const moment = require('moment');
const EstoqueService = require('../services/estoqueServices');

class RabbitLocal{
    localService = new LocalService();
    firebase = new Database();
    estoqueService = new EstoqueService();

    async relacional (body, type){
        let response;
        var initial;
        const date = moment().toDate();
    
        console.log('Rabbit consumer on')

        if(type === 'get'){
            queue.consume('Relacional', message => {
                console.log("processing " + message.content.toString())
            })
            return await this.localService.list();
        }

        if(type === 'put' || type === 'post'){
            response = await this.estoqueService.get(body.id);
            initial = response.dataValues.quantidade
            var restante = (initial - body.quantidade);
            var index = await this.firebase.select_index_reposicao_prateleira();
        }
        

        queue.consume('Relacional', message => {
            console.log("processing " + message.content.toString());
            switch(type){
                case 'get': 
                    console.log('get');
                break;

                case 'post': 
                    console.log('post');
                    this.localService.create(body);
                    this.estoqueService.update(body.id, body);
                    this.firebase.insert_reposicao_prateleira(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_prateleira(index + 1);
                    this.firebase.insert_reposicao_estoque(index, body.nome, date.toString(), restante);
                    this.firebase.update_index_reposicao_estoque(index + 1);
                break;

                case 'put': 
                    console.log('local');
                    console.log('put');
                    this.localService.update(body.id, body);
                    this.firebase.insert_reposicao_prateleira(index, body.nome, date.toString(), body.quantidade);
                    this.firebase.update_index_reposicao_prateleira(index + 1);
                break;

                case 'caixa': 
                    console.log('put caixa');
                    this.localService.update(body.id, body);
                break;
            }
        })
    }

}
module.exports = RabbitLocal;