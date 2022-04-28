const { Router } = require('express');
const app = require('../server');

const produtosController =  require('./produtosController');
const localController =  require('./localControllers');
const estoqueController =  require('./estoqueControllers');
const relacionamentoController =  require('./relacionamentoController');



const routes = Router();

routes.use('/produto', produtosController);
routes.use('/local', localController);
routes.use('/estoque', estoqueController);
routes.use('/relacionamento', relacionamentoController);

module.exports = routes;