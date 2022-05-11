const { Router } = require('express');
const EstoqueService = require('../services/estoqueService');
const {estoque} = require('../db/models')


const routes = Router();

const estoqueService = new EstoqueService();

routes.get('/', async (_req, res) => {
   try{
        const estoque = await estoqueService.list();
        return res.status(200).json(estoque);
   }catch(err){
       //404, 500
       if(err){
        alert(err);
        return res.json({
            errorMessage: error.message
        })
     }
   }
})

routes.post('/', async  (req, res) => {
    try{
        const {body} = req;
        const  estoque = await estoqueService.create(body);

        return res.status(200).json(estoque);
    }catch(err){
        return res.status(405).json({
            errorMessage: err.message
        })
    }
})

routes.put('/:id', async (req, res) => {
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

routes.get('/:id', async (req, res) => {
    const {params} = req;
    const {id} = params;

    try{
        const estoque = await estoque.findOne({ where: { id } });
        return res.status(200).json(estoque);
   }catch(err){
        return res.status(400).json({
            errorMessage: error.message
        })
   }
    
})

module.exports = routes;