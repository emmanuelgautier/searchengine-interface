'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'searchengine'
    },
    port: 3000,
    dbName: 'searchengine',
    dbUser: 'root',
    dbPassword: null
  },

  test: {
    root: rootPath,
    app: {
      name: 'searchengine'
    },
    port: 3000,
    dbName: 'searchengine',
    dbUser: 'root',
    dbPassword: null
  },

  production: {
    root: rootPath,
    app: {
      name: 'searchengine'
    },
    port: 80,
    dbName: 'searchengine',
    dbUser: 'root',
    dbPassword: 'insertyourpasswordhere'
  }
};

module.exports = config[env];
