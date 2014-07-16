'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Words = sequelize.define('words', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    word: {
      type: DataTypes.STRING(150),
      allowNull: false 
    }
  });
 
  return Words;
};