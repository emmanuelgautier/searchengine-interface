'use strict';

var db = require('../models/'),

  quote = function(str){
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
  },

  search = function(search, page, callback){
    search = search || null;

    callback = (typeof callback === 'function') ? callback : function(){};

    db.sequelize.query("call getdocuments('" + quote(search) + ");")
      .success(function(documents){
        callback(documents, null);
      });
  };

module.exports = {
  page: function(req, res){
    var q = req.query.q || '',
        page = (req.query.page) ? (req.query.page - 1) : 0,

        navigation = {};

    if(page > 0){
      navigation.previousPage = page;
    }
    navigation.nextPage = page + 2;

    navigation.pages = [];
    var i = 1, l = 10;

    if(page > 5){
      i = page - 4;
    }

    l = l + i;
    while(i < l)
    {
      navigation.pages.push({
        page: i,
        active: i === (page + 1),
        query: q
      });

      i += 1;
    }

    navigation.nextPrevious = page + 2;

    search(q, page, function(documents){
      res.render('search', {
        title: q + ' search results',
        documents: documents,
        navigation: navigation,
        currentPage: page
      });
    });
  },

  redirect: function(req, res){
    res.redirect(req.param('r'));
  },

  api: {
    search: function(query, page, callback){
      search(query, page, callback);
    }
  }
};
