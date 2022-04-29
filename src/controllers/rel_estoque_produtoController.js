const { Router } = require('express');
const Rel_estoque_produtoService = require('../services/rel_estoque_produtoService');
const {rel_estoque_produto} = require('../db/models')


const routes = Router();

const rel_estoque_produtoService = new Rel_estoque_produtoService();

routes.get('/', async (_req, res) => {
   try{
        const rel_estoque_produto = await rel_estoque_produtoService.list();
        return res.status(200).json(rel_estoque_produto);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
})

routes.post('/', async  (req, res) => {
    try{
        const {body} = req;
        const  rel_estoque_produto = await rel_estoque_produtoService.create(body);

        return res.status(201).json(rel_estoque_produto);
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
        await rel_estoque_produtoService.updateByName(name, body);
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
        await rel_estoque_produtoService.deleteById(id);
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

    const rel_estoque_produto = await rel_estoque_produto.findOne({ where: { name } });

    if(user === null){
        return null
    }else return 'ok'
    
})

module.exports = routes;