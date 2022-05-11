#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

//Função irá consumir a mensagem da fila e adicionar no banco relacional
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'SQL';

    channel.assertQueue(queue, {
      durable: false
    });


    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      channel.consume(queue, function(msg) {
        //Pegar a mensagem e chamar a função de adicionar no banco.
        console.log(" [x] Received %s", msg.content.toString());
      }, {
          noAck: true
        });
  });
});


