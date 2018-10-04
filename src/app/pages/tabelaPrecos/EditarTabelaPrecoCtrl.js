/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos')
        .controller('EditarTabelaPrecoCtrl', EditarTabelaPrecoCtrl);

    /** @ngInject */
    function EditarTabelaPrecoCtrl($scope, $http, $stateParams) {

        //TODO -> refatorar isso aqui também, ta se repetindo.
        $http.get('http://localhost:8000/api/tipo-servico').then(function (response) {
            $scope.tipoServico = response.data;
        });

        $http.get('http://localhost:8000/api/fornecedor').then(function (response) {
            $scope.fornecedores = response.data;
        });

        $http.get('http://localhost:8000/api/tabela-preco/' + $stateParams.id).then(function (response) {
            console.log(response);
            $scope.tabelaPreco = {
                id_fornecedores: response.data.id_fornecedores,
                id_tipo_servico: response.data.id_tipo_servico,
                nr_valor: response.data.nr_valor,
                nr_percentagem_desconto: response.data.nr_percentagem_desconto,
                tx_descricao_servico: response.data.tx_descricao_servico,
                tx_nome_tabela_preco: response.data.tx_nome_tabela_preco
            };

        });


        $scope.editarTabelaPreco = function (fornecedor, enderecoCompleto) {
            console.log(fornecedor);
            console.log(enderecoCompleto);
            $http.put('http://localhost:8000/api/tabela-preco/' + fornecedor.id_fornecedores, {
                fornecedor: fornecedor,
                enderecoCompleto: enderecoCompleto
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Fornecedor editado com sucesso!", "success")
                        .then(() => {
                            window.history.go(-1);
                        });
                }
            });
        }
    }

})();
