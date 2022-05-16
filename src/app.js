#!/usr/bin/env node

const dotenv = require('dotenv')
dotenv.config()

const app = require('./server')
var cors = require('cors')

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(PORT))

const ProdutosService = require('./services/produtosServices');
const produtosService = new ProdutosService();
const Database = require('./db/repositories/firebaseRepository');
const moment = require('moment');
const firebase = new Database();
const date = moment().toDate();

const queue = require("./rabbit/queue");

console.log("Rabbit on");

queue.consume("app", message => {
  console.log("processing " + message.content.toString());
  let json = JSON.parse(message.content.toString());
  console.log('JSON:', json);
  produtosService.update(json.id, json);
  firebase.updateApp(json, date);
})

