const { Router } = require('express');
const queue = require('../rabbit/queue');
const RabbitLocal = require('../rabbit/receivedLocal');
var cors = require('cors');

const routes = Router();
const rabbitLocal = new RabbitLocal();

routes.get('/',cors(), async  (req, res) => {
    const {body} = req;
    try{
        queue.sendToQueue('Relacional', body);
        response = await rabbitLocal.relacional(body, 'get');
        return res.status(200).json(response);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.get('/id',cors(), async  (req, res) => {
    const {body} = req;
    try{
        queue.sendToQueue('Relacional', body);
        response = await rabbitLocal.relacional(body, 'get id');
        return res.status(200).json(response);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.post('/',cors(), async  (req, res) => {
    const {body} = req;

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitLocal.relacional(body, 'post');
        return res.status(200).json(response);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.put('/',cors(), async  (req, res) => {
    const {params, body} = req;
    const {name} = params;

    try{
        queue.sendToQueue('Relacional', body);
        await rabbitLocal.relacional(body, 'put');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

routes.put('/caixa',cors(), async  (req, res) => {
    const { body} = req;
    try{
        queue.sendToQueue('Relacional', body);
        await rabbitLocal.relacional(body, 'caixa');
        return res.status(200).json(body);

    }catch(err){
        console.log(err, 'err');
    }

})

module.exports = routes;