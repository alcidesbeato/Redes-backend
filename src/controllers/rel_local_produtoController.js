const { Router } = require('express');
const Rel_local_produtoService = require('../services/rel_local_produtoService');
const {rel_local_produto} = require('../db/models')


const routes = Router();

const rel_local_produtoService = new Rel_local_produtoService();

routes.get('/', async (_req, res) => {
   try{
        const rel_local_produto = await rel_local_produtoService.list();
        return res.status(200).json(rel_local_produto);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
})

routes.post('/', async  (req, res) => {
    try{
        const {body} = req;
        const  rel_local_produto = await rel_local_produtoService.create(body);

        return res.status(201).json(rel_local_produto);
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
        await rel_local_produtoService.updateByName(name, body);
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
        await rel_local_produtoService.deleteById(id);
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

    const rel_local_produto = await rel_local_produto.findOne({ where: { name } });

    if(user === null){
        return null
    }else return 'ok'
    
})

module.exports = routes;