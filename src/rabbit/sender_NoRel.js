#!/usr/bin/env node

//npm install amqplib

var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(error0, connection) {});

//Create a channel 
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {});
});


//Declare the Queue and send the message
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'NaoRelacional';
    var msg = 'Message to bank'; 

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});

//Closing connection 
setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);
