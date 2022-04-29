const { Router } = require('express');
const app = require('../server');

const produtosController =  require('./produtosController');
const localController =  require('./localControllers');
const estoqueController =  require('./estoqueControllers');
const rel_local_produtoController = require('./rel_local_produtoController');
const rel_estoque_produtoController = require('./rel_estoque_produtoController');



const routes = Router();

routes.use('/produto', produtosController);
routes.use('/local', localController);
routes.use('/estoque', estoqueController);
routes.use('/rel_local_produto', rel_local_produtoController);
routes.use('/rel_estqoue_produto', rel_estoque_produtoController);


module.exports = routes;