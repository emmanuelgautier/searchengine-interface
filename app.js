'use strict';

var app = require('express')(),
    config = require('./config/config'),
    db = require('./app/models'),

    server = null;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('./config/express')(app, config);
require('./config/routes')(app);

db.sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err;
    } else {
      server = app.listen(config.port);
      require('./config/sockets')(server);

      console.log('Listening on port', config.port);
    }
  });
