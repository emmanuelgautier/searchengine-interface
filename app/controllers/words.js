'use strict';

var db = require('../models/');

module.exports = function(word, callback){
  word = word || '';
  callback = (typeof callback === 'function') ? callback : function(){};

  db.words.findAll({ 
    where: db.Sequelize.or(
      { word: word },
      { word: { like: word + '%' } }
    ),
    limit: 5
  }).success(function(word){
    callback(word);
  });
};