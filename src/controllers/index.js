const { Router } = require('express');
const app = require('../server');

const produtosController =  require('./produtosController');
const localController =  require('./localController');
const estoqueController =  require('./estoqueController');

const routes = Router();

routes.use('/produtos', produtosController);
routes.use('/local', localController);
routes.use('/estoque', estoqueController);

module.exports = routes;