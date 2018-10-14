/**
 * @author Alex Alexandre
 * criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos')
        .controller('IncluirTabelaPrecoCtrl', IncluirTabelaPrecoCtrl);

    /** @ngInject */
    function IncluirTabelaPrecoCtrl($scope, $filter, editableOptions, editableThemes, $http, CONFIG) {

        $http.get(CONFIG.dwdApi + '/tipo-servico').then(function (response) {
            $scope.tipoServico = response.data;
        });

        $http.get(CONFIG.dwdApi + '/fornecedor').then(function (response) {
            $scope.fornecedores = response.data;
        });


        $scope.prod = [
            //
        ];

        $scope.adicionarProdutos = function (prod) {
            $scope.inserted = {
                nr_valor: prod.nr_valor,
                nr_percentagem_desconto: prod.nr_percentagem_desconto,
                tx_descricao_servico: prod.tx_descricao_servico
            };
            $scope.prod.push($scope.inserted);
        };

        $scope.deletarProd = function (index) {
            $scope.prod.splice(index, 1);
        };

        $scope.salvarTabelaPreco = function (tabelaPreco, prod) {
            console.log(tabelaPreco);
            console.log(prod);
            $http.post(CONFIG.dwdApi + '/tabela-preco', {
                tabelaPreco: tabelaPreco,
                prod: prod
            }).then(function (response) {
                    if (response.success = true) {
                        swal("Parabéns!", "Tabela de preços criado com sucesso!", "success")
                            .then(function () {
                                window.history.go(-1);
                            });
                    }
                });
        }
    }

})();
