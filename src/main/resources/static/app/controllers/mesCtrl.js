angular.module("agenda").controller("mesCtrl", function ($scope) {
   $scope.valor = [];
   $scope.opcoes = [
      {nome:"Bancarias"},
      {nome:"Escolar"},
      {nome:"Telefone"},
      {nome:"Internet"},
      {nome:"Imposto"},
      {nome:"Diversão"},
      {nome:"Água"},
      {nome:"Luz"},
      {nome:"Saúde"},
   ];

  $scope.adicionarDespesa = function (despesa) {
    $scope.valor.push(angular.copy(despesa));
  };
 });