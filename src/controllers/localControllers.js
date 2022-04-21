const { Router } = require('express');
const LocalService = require('../services//localService');
const {produtos} = require('../db/models')


const routes = Router();

const localService = new LocalService();

routes.get('/', async (_req, res) => {
    const local = await localService.list();

    return res
    .status(200)
    .json(local);
})

routes.post('/', async  (req, res) => {
    const {body} = req;
    const  local = await localService.create(body);

    return res.status(201).json(local);
})

routes.put('/:name', async (req, res) => {
    const {body,params} = req;
    const {name} = params;

    try{
        await localService.updateByName(name, body);
    }catch(error){
        return res.status(400).json({
            errorMessage: error.message
        })
    }

    return res.status(200).json({
        ok: true
    })
})

routes.delete('/:id', async (req, res) => {
    const {params} = req;
    const {id} = params;

    try{
        await localService.deleteById(id);
    }catch(error){
        return res.status(400).json({
            errorMessage: error.message
        })
    }

    return res.status(200).json({
        ok: true
    })
})

routes.get('/check/:name', async (req, res) => {
    const {params} = req;
    const {name} = params;

    const local = await local.findOne({ where: { name } });

    if(user === null){
        console.log('usuario invalido');
        return null
    }else return 'ok'

})

module.exports = routes;