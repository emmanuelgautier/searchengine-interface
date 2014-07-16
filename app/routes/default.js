'use strict';

var search = require('../controllers/search');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Search Engine'
    });
  });

  app.get('/search', search.page);

  app.get('/redirect', search.redirect);
};