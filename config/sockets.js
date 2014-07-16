'use strict';

var search = require('../app/controllers/search'),
    words  = require('../app/controllers/words');

module.exports = function(server) {
  var io = require('socket.io')(server);

  io.on('connection', function(socket){
    socket.on('documents', function(query, callback){
      search.api.search(query.query, query.page, callback);
    });

    socket.on('words', function(word, callback){
      words(word.word, function(word){
        callback(word);
      });
    });
  });

  console.log('Listening sockets');
};