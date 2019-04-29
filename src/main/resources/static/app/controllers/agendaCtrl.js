angular.module("agenda").controller("agendaCtrl", function ($scope, $http) {
  $scope.app = "Agenda";
    $scope.operadoras = [
      {nome: "TIM", categoria: "Celular"},
      {nome: "VIVO", categoria: "Celular"},
      {nome: "OI", categoria: "Celular"},
      {nome: "CLARO", categoria: "Celular"},
      {nome: "GVT", categoria: "Fixo"},
      {nome: "EMBRATEL", categoria: "Fixo"}
    ];
    var mostrarContatos = function (){
        $http.get("http://localhost:3214/contatos").success(function(nome){
        $scope.contatos = nome;
        });

    };
    $scope.adicionarContato = function (contato) {
       $scope.contatos.push(angular.copy(contato));
       delete $scope.contato;
       $scope.contatoForm.$setPristine();
    };
    $scope.apagarContato = function (contatos) {
       $scope.contatos = contatos.filter(function (contato) {
         if (!contato.selecionado)
             return contato;
         });
       };
    $scope.isContatoSelecionado = function (contatos) {
       return contatos.some( function (contato) {
          return contato.selecionado;
       });
    };
    {{mostrarContatos}}
  });
