/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores')
        .controller('IncluirFornecedoresCtrl', IncluirFornecedoresCtrl);

    /** @ngInject */
    function IncluirFornecedoresCtrl($scope, $http) {
//TODO - implementar lógica, para digitar primeiro o CEP, e já trazer selecionado a UF e a CIDADE


        $scope.enderecoCompleto = {
            tx_bairro: null,
            tx_logradouro: null,
            tx_complemento: null
        };

        $http.get('http://localhost:8000/api/uf').then(function (response) {
            // $scope.enderecoCompleto.uf = response.data;
            $scope.uf = response.data;
        });

        $scope.retornaCidadedes = function (cidades) {
            $http.get('http://localhost:8000/api/cidade/uf/' + cidades).then(function (response) {
                $scope.cidades = response.data;
                // $scope.enderecoCompleto.cidades = response.data;
            });
        };

        $scope.buscarEndereco = function (cep) {
            $http.get('https://viacep.com.br/ws/' + cep + '/json/').then(function (response) {
                $scope.enderecoCompleto.tx_bairro = response.data.bairro;
                $scope.enderecoCompleto.tx_logradouro = response.data.logradouro;
                $scope.enderecoCompleto.tx_complemento = response.data.complemento;
            });
        };

        $scope.salvarFornecedor = function (fornecedor, enderecoCompleto) {
            $http.post('http://localhost:8000/api/fornecedor', {
                fornecedor: fornecedor,
                enderecoCompleto: enderecoCompleto
            }).then(function (response) {
                window.history.go(-1);
                return false;
            });
        }
    }

})();
