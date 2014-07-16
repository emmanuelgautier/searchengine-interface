'use strict';

searchengineApp.controller('AppCtrl', function($scope) {});

searchengineApp.controller('SearchBarCtrl', function($scope, $rootScope, $location, $typeahead) {
  $rootScope.searchbar_url = 'partials/searchbar.html';

  $rootScope.searchbar_visibility = false;

  $scope.initialize_typeahead = function() {
    $typeahead.initializeSource().typeahead('#searchbar', {
      minLength: 3,
      highlight: true,
      hint: true,
    }, {
      templates: {
        suggestion: Handlebars.compile('<p><span class="text-muted">{{sentence}}</span> {{word}}</p>')
      }
    });
  }

  $scope.search = function(query){
    $location.path('/search').search({q: query});
  };
});

searchengineApp.controller('MainCtrl', function($scope, $rootScope, $location) {
  $rootScope.searchbar_visibility = false;

  $scope.search = function(query){
    $location.path('/search').search({q: query});
  };
});

searchengineApp.controller('SearchCtrl', function($scope, $rootScope, $location, $socket) {
  $rootScope.searchbar_visibility = true;

  $scope.page = 0;
  $scope.documents = [];

  var query = ($location.search()).q;

  $scope.nextPage = function(){
    $socket.emit('documents', {
      query: query,
      page: $scope.page
    }, function(documents){
      $scope.documents = $scope.documents.concat(documents);
    });

    $scope.page += 1;
  };
});
