const { Router } = require('express');
const app = require('../server');

const productsController =  require('./productsController');

const routes = Router();

routes.use('/products', productsController);

module.exports = routes;