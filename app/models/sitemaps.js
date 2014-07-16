'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Sitemaps = sequelize.define('sitemaps', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    url: {
      type: DataTypes.STRING(2000),
      allowNull: false 
    },

    parent: { 
      type: DataTypes.INTEGER,
      allowNull: false     
    }
  }, {
    associate: function(models){
      Sitemaps.hasMany(models.sites, {foreignKey: 'site_id'});
    }
  });
 
  return Sitemaps;
};