searchengineApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/search', {
        templateUrl: 'partials/documents.html',
        controller: 'SearchCtrl'
      }).
      otherwise({
        redirectTo: ''
      });
  }]);