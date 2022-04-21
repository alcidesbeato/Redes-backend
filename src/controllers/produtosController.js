const { Router } = require('express');
const ProdutosService = require('../services/produtoService');
const {produtos} = require('../db/models')


const routes = Router();

const produtosService = new ProdutosService();

routes.get('/', async (_req, res) => {
    const produtos = await produtosService.list();

    return res
    .status(200)
    .json(produtos);
})

routes.post('/', async  (req, res) => {
    const {body} = req;
    const  produtos = await produtosService.create(body);

    return res.status(201).json(produtos);
})

routes.put('/:name', async (req, res) => {
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

routes.get('/check/:name', async (req, res) => {
    const {params} = req;
    const {name} = params;


    const produtos = await produtos.findOne({ where: { name } });

    if(user === null){
        return null
    }else return 'ok'

})

module.exports = routes;