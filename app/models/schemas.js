'use strict';

/*jshint camelcase:false */

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Schemas = sequelize.define('schemas', {
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(45),
      allowNull: false 
    },

    parent: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    associate: function(models){
      Schemas.hasMany(models.documents, {foreignKey: 'document_id'});
    }
  });
 
  return Schemas;
};