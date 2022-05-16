#!/usr/bin/env node

const dotenv = require('dotenv')
dotenv.config()

const app = require('./server')
var cors = require('cors')

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(PORT))

const ProdutosService = require('./services/produtosServices');
produtosService = new ProdutosService();    
const queue = require("./rabbit/queue");

console.log("Rabbit on");

queue.consume("app", message => {
  console.log("processing " + message.content.toString());
  let json = JSON.parse(message.content.toString());
  console.log('JSON:', json);
  produtosService.update(json.id, json);
})

