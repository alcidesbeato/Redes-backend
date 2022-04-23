const { Router } = require('express');
const RelacionamentoService = require('../services/relacionamentoService');
const {rel_est_local_prod} = require('../db/models')


const routes = Router();

const relacionamentoService = new RelacionamentoService();

routes.get('/', async (_req, res) => {
    const products = await relacionamentoService.list();

    return res
    .status(200)
    .json(products);
})

routes.post('/', async  (req, res) => {
    const {body} = req;
    const  products = await relacionamentoService.create(body);

    return res.status(201).json(products);
})

routes.put('/:name', async (req, res) => {
    const {body,params} = req;
    const {name} = params;

    try{
        await relacionamentoService.updateByName(name, body);
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
        await relacionamentoService.deleteById(id);
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


    const products = await products.findOne({ where: { name } });

    if(user === null){
        return null
    }else return 'ok'
    
})

module.exports = routes;