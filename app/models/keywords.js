'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Keywords = sequelize.define('keywords', {
    rank: { 
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    associate: function(models){
      Keywords.hasMany(models.documents, {foreignKey: 'document_id'});
      Keywords.hasMany(models.words, {foreignKey: 'word_id'});
    }
  });
 
  return Keywords;
};