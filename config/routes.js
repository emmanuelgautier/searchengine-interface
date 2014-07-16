'use strict';

module.exports = function(app){

  //default routes
  require('../app/routes/default')(app);

  //api routes
  require('../app/routes/apis')(app);
};
