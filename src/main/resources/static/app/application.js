angular.module("agenda", [ 'ngRoute']);
angular.module("agenda").config(['$routeProvider', function($routeProvider) {
 $routeProvider
      .when("/", {
        templateUrl: "home.html",
      })
      .when("/agenda", {
         templateUrl: "agenda.html",
         controller: "agendaCtrl"
      })
      .when("/tarefas", {
          templateUrl: "tarefas.html",
          controller: "tarefaCtrl"
      })
      .when("/contas", {
           templateUrl: "contas.html"
      })
      .when("/janeiro", {
          templateUrl:"custoMeses/janeiro.html",
          controller: "mesCtrl"
      });
 }]);