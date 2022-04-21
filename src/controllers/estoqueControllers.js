const { Router } = require('express');
const EstoqueService = require('../services/estoqueService');
const {estoque} = require('../db/models')


const routes = Router();

const estoqueService = new EstoqueService();

routes.get('/', async (_req, res) => {
    const estoque = await estoqueService.list();

    return res
    .status(200)
    .json(estoque);
})

routes.post('/', async  (req, res) => {
    const {body} = req;
    const  estoque = await estoqueService.create(body);

    return res.status(201).json(estoque);
})

routes.put('/:name', async (req, res) => {
    const {body,params} = req;
    const {name} = params;

    try{
        await estoqueService.updateByName(name, body);
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
        await estoqueService.deleteById(id);
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

    const estoque = await estoque.findOne({ where: { name } });

    if(user === null){
        console.log('usuario invalido');
        return null
    }else return 'ok'

})

module.exports = routes;