const { Router } = require('express');
const LocalService = require('../services/localService');
const {local} = require('../db/models')


const routes = Router();

const localService = new LocalService();

routes.get('/', async (_req, res) => {
   try{
        const local = await localService.list();
        return res.status(200).json(local);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
})

routes.post('/', async  (req, res) => {
    try{
        const {body} = req;
        const  local = await localService.create(body);

        return res.status(201).json(local);
    }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
    }
})

routes.put('/:id', async (req, res) => {
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

routes.get('/:id', async (req, res) => {
    const {params} = req;
    const {id} = params;

    try{
        const local = await local.findOne({ where: { id } });
        return res.status(200).json(local);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
    
})

module.exports = routes;