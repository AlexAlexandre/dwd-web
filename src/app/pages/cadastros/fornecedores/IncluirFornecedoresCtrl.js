/**
 * @author Alex Alexandre
 * criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores')
        .controller('IncluirFornecedoresCtrl', IncluirFornecedoresCtrl);

    /** @ngInject */
    function IncluirFornecedoresCtrl($scope, $http, CONFIG) {

        $scope.enderecoCompleto = {
            sg_uf: null,
            tx_localidade: null,
            tx_bairro: null,
            tx_logradouro: null,
            tx_complemento: null
        };

        $http.get(CONFIG.dwdApi + '/uf').then(function (response) {
            // $scope.enderecoCompleto.uf = response.data;
            $scope.uf = response.data;
        });

        $scope.buscarEndereco = function (cep) {
            $http.get('https://viacep.com.br/ws/' + cep + '/json/').then(function (response) {
                console.log(response);
                $scope.enderecoCompleto.sg_uf = response.data.uf;
                $scope.enderecoCompleto.tx_localidade = response.data.localidade;
                $scope.enderecoCompleto.tx_bairro = response.data.bairro;
                $scope.enderecoCompleto.tx_logradouro = response.data.logradouro;
                $scope.enderecoCompleto.tx_complemento = response.data.complemento;
            });
        };

        $scope.salvarFornecedor = function (fornecedor, enderecoCompleto) {

            $http.post(CONFIG.dwdApi + '/fornecedor', {
                fornecedor: fornecedor,
                enderecoCompleto: enderecoCompleto
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Fornecedor criado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        }
    }

})();
