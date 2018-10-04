/**
 * @author Alex Alexandre
 * criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos')
        .controller('IncluirTabelaPrecoCtrl', IncluirTabelaPrecoCtrl);

    /** @ngInject */
    function IncluirTabelaPrecoCtrl($scope, $filter, editableOptions, editableThemes, $http) {

        $http.get('http://localhost:8000/api/tipo-servico').then(function (response) {
            $scope.tipoServico = response.data;
        });

        $http.get('http://localhost:8000/api/fornecedor').then(function (response) {
            $scope.fornecedores = response.data;
        });

        $scope.salvarTabelaPreco = function (tabelaPreco) {
            $http.post('http://localhost:8000/api/tabela-preco', {tabelaPreco: tabelaPreco})
                .then(function (response) {
                    console.log(response);
                    if (response.success = true) {
                        swal("Parabéns!", "Tabela de preços criado com sucesso!", "success")
                            .then(function() {
                                window.history.go(-1);
                            });
                    }
                });
        }
    }

})();
