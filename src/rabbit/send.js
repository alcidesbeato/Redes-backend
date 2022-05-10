#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

//Copiar essa função no momento quer quer inserir algo no banco (Manda o JSON)
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'SQL';
    //var msg = 'Teste';
    //Informação a ser escrita no banco 
    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });


setTimeout(function() {
  connection.close();
  process.exit(0)
  }, 500);
});