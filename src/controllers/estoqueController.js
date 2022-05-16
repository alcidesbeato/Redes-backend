const { Router } = require('express');
const queue = require('../rabbit/queue');
const RabbitEstoque = require('../rabbit/receivedEstoque');
var cors = require('cors');


const routes = Router();
const rabbitEstoque = new RabbitEstoque();

routes.get('/',cors(), async  (req, res) => {
    const {body} = req;
    try{
        queue.sendToQueue('Relacional', body);
        response = await rabbitEstoque.relacional(body, 'get');
        return res.status(200).json(response);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.post('/', cors(), async  (req, res) => {
    const {body} = req;

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitEstoque.relacional(body, 'post');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.put('/', cors(), async  (req, res) => {
    const {params, body} = req;
    const {name} = params;

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitEstoque.relacional(body, 'put');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

module.exports = routes;