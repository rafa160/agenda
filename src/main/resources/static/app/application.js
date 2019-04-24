angular.module("agenda", [ 'ngRoute']);


angular.module("agenda").config(['$routeProvider', function($routeProvider) {
          $routeProvider
            .when("/", {
              templateUrl: "./teste.html"
            })
            .when("/home", {
              templateUrl: "home.html"
            });
}]);