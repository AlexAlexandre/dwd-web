/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos')
        .controller('EditarTabelaPrecoCtrl', EditarTabelaPrecoCtrl);

    /** @ngInject */
    function EditarTabelaPrecoCtrl($scope, $http, $stateParams, CONFIG) {

        //TODO -> refatorar isso aqui também, ta se repetindo.
        $http.get(CONFIG.dwdApi + '/tipo-servico').then(function (response) {
            $scope.tipoServico = response.data;
        });

        $http.get(CONFIG.dwdApi + '/fornecedor').then(function (response) {
            $scope.fornecedores = response.data;
        });

        $http.get(CONFIG.dwdApi + '/tabela-preco/' + $stateParams.id).then(function (response) {
            console.log(response.data);
            $scope.tabelaPreco = {
                id_fornecedores: response.data.id_fornecedores,
                id_tipo_servico: response.data.id_tipo_servico,
                nr_valor: response.data.nr_valor,
                nr_percentagem_desconto: response.data.nr_percentagem_desconto,
                tx_descricao_servico: response.data.tx_descricao_servico,
                tx_nome_tabela_preco: response.data.tx_nome_tabela_preco
            };

            $scope.prod = response.data.produtos;

        });


        $scope.editarTabelaPreco = function (fornecedor, enderecoCompleto) {
            console.log(fornecedor);
            console.log(enderecoCompleto);
            $http.put(CONFIG.dwdApi + '/tabela-preco/' + fornecedor.id_fornecedores, {
                fornecedor: fornecedor,
                enderecoCompleto: enderecoCompleto
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Fornecedor editado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        };

        $scope.editarProduto = function (prod) {
            console.log(prod);
            $scope.prodEditar = {
                id_produtos: prod.id_produtos,
                nr_valor: prod.nr_valor,
                nr_percentagem_desconto: prod.nr_percentagem_desconto,
                tx_descricao_servico: prod.tx_descricao_servico
            }
        };

        $scope.deletarProduto = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete(CONFIG.dwdApi + '/tabela-preco/produto/' + id).then(function (response) {
                            console.log(response);
                            if (response.data = 1) {
                                swal("Parabéns!", "Produto removido da tabela de preço com sucesso!", "success")
                                    .then(function () {
                                        location.reload();
                                    });

                            }
                        });
                    } else {
                        // console.log('não faz nada');
                    }
                });
        };
    }

})();
