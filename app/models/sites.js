'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Sites = sequelize.define('sites', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    url: {
      type: DataTypes.STRING(254),
      allowNull: false 
    },

    ip: { 
      type: DataTypes.STRING(15),
      allowNull: false
    },
    favicon: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  });
 
  return Sites;
};