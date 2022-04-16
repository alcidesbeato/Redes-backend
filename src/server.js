const express = require('express');

const {sequelize} = require('./db/models')

const app = express();
app.use(express.json());

sequelize
    .authenticate()
    .then(() => console.log('Sequelize on'))
    .catch((error) => console.log(error));

const routes = require('./controllers')

app.use('/api', routes);

module.exports = app;
