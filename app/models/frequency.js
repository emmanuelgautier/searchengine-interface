'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Frequency = sequelize.define('frequency', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    label: {
      type: DataTypes.STRING(45),
      allowNull: false 
    },

    hours: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
 
  return Frequency;
};