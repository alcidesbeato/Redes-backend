const express = require('express');

const {sequelize} = require('./db/models')

var cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors())
app.options('*', cors())

sequelize
    .authenticate()
    .then(() => console.log('Sequelize on'))
    .catch((error) => console.log(error));

const routes = require('./controllers')

app.use('/api', routes);

module.exports = app;
