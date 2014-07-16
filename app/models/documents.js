'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Documents = sequelize.define('documents', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    path: {
      type: DataTypes.STRING(2000),
      allowNull: false 
    },
    
    title: {
      type: DataTypes.STRING(80),
      allowNull: false 
    },
    
    description: {
      type: DataTypes.STRING(200),
      allowNull: false 
    },

    http_code: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pagerank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    
    last_crawl: {
        type: DataTypes.DATE,
        allowNull: false
    },
  }, {
    associate: function(models){
      Documents.hasMany(models.frequency, {foreignKey: 'frequency'});
      Documents.hasMany(models.sites, {foreignKey: 'site_id'});
    }
  });
 
  return Documents;
};