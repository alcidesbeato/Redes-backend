const { Router } = require('express');
const ProdutosService = require('../services/produtoService');
const {produtos} = require('../db/models')


const routes = Router();

const produtosService = new ProdutosService();

routes.get('/', async (_req, res) => {
   try{
        const produtos = await produtosService.list();
        return res.status(200).json(produtos);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
})

routes.post('/', async  (req, res) => {
    try{
        const {body} = req;
        const  produtos = await produtosService.create(body);

        return res.status(201).json(produtos);
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
        await produtosService.updateByName(name, body);
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
        await produtosService.deleteById(id);
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
        const produtos = await produtos.findOne({ where: { id } });
        return res.status(200).json(produtos);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
    
})

module.exports = routes;