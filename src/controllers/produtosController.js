const { Router } = require('express');
const queue = require('../rabbit/queue');
const RabbitProduto = require('../rabbit/receivedProduto');
var cors = require('cors');
const produtos = require('../db/models/produtos');

const routes = Router();
const rabbitProduto = new RabbitProduto();

routes.get('/',cors(), async  (req, res) => {
    const {body} = req;
    try{
        queue.sendToQueue('Relacional', body);
        response = await rabbitProduto.relacional(body, 'get');
        return res.status(200).json(response);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.post('/',cors(), async  (req, res) => {
    const {body} = req;

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitProduto.relacional(body, 'post');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.put('/',cors(), async  (req, res) => {
    const {params, body} = req;
    const {name} = params;
    console.log('put');

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitProduto.relacional(body, 'put');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

module.exports = routes;


//app -> put nos produtos e adiciona no estoque a quantidade
//almoxarifado -> get no estoque, put estoque e put localStorage
//caixa -> get no local e put no local

