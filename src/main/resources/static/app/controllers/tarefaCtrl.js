angular.module("agenda").controller("tarefaCtrl", function ($scope) {
          $scope.app = "Agenda";
          $scope.tarefas = [
            {prioridade: {nivel: "High"},data: new Date(),  meses: {nome: "Fevereiro"}, descricao: "Ajustar tabela de preços e colocar botões."},
            {prioridade: {nivel: "Low"},data: new Date(),  meses: {nome: "Dezembro"}, descricao: "Validar tela Login."},
            {prioridade: {nivel: "Medium"},data: new Date(),  meses: {nome: "Fevereiro"}, descricao: "Configurar BD."},
            {prioridade: {nivel: "Low"},data: new Date(),  meses: {nome: "Março"}, descricao: "Estudar para projeto inicial."},
            {prioridade: {nivel: "Low"},data: new Date(),  meses: {nome: "Abril"}, descricao: "Configurar BD."},
            {prioridade: {nivel: "Medium"},data: new Date(),  meses: {nome: "Dezembro"}, descricao: "Configurar BD 2."},
            {prioridade: {nivel: "Medium"},data: new Date(),  meses: {nome: "Julho"}, descricao: "Configurar BD 4."},
            {prioridade: {nivel: "High"},data: new Date(),  meses: {nome: "Dezembro"}, descricao: "Finalizar projeto."},
            {prioridade: {nivel: "Low"},data: new Date(),  meses: {nome: "Julho"}, descricao: "Estudar Java."},
            {prioridade: {nivel: "High"},data: new Date(),  meses: {nome: "Dezembro"}, descricao: "Prova da Faculdade."},
            {prioridade: {nivel: "Medium"},data: new Date(),  meses: {nome: "Agosto"}, descricao: "Medico."},
          ];
          $scope.adicionarTarefas = function (tarefa) {
             $scope.tarefas.push(angular.copy(tarefa));
             delete $scope.tarefa;
          };
          $scope.prioridade = [
            {nivel: "High"},
            {nivel: "Medium"},
            {nivel: "Low"}
          ];
          $scope.meses = [
            {nome: "Janeiro"},
            {nome: "Fevereiro"},
            {nome: "Março"},
            {nome: "Abril"},
            {nome: "Maio"},
            {nome: "Junho"},
            {nome: "Julho"},
            {nome: "Agosto"},
            {nome: "Setembro"},
            {nome: "Outubro"},
            {nome: "Novembro"},
            {nome: "Dezembro"}
          ];
          $scope.deletarTarefa = function (tarefas) {
            $scope.tarefas = tarefas.filter (function (tarefa) {
              if (!tarefa.selecionado)
                return tarefa;
            });
          };
          $scope.isTarefaSelecionado = function (tarefas) {
            return tarefas.some( function (tarefa) {
               return tarefa.selecionado;
            });
          };
          $scope.ordenarPor = function (nome) {
            $scope.ordenacao = nome;
          };
        });

