angular.module("agenda", [ 'ngRoute']);


angular.module("agenda").config(['$routeProvider', function($routeProvider) {
          $routeProvider
            .when("/agenda", {
              templateUrl: "agenda.html",
              controller: "agendaCtrl"
            })
            .when("/tarefas", {
              templateUrl: "tarefas.html",
              controller: "tarefaCtrl"
            });
}]);