/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores')
        .controller('EditarFornecedoresCtrl', EditarFornecedoresCtrl);

    /** @ngInject */
    function EditarFornecedoresCtrl($scope, $http, $stateParams) {

        $http.get('http://localhost:8000/api/fornecedor/' + $stateParams.id).then(function (response) {
            $scope.fornecedor = {
                id_fornecedores: response.data.id_fornecedores,
                tx_nome_fornecedor: response.data.tx_nome_fornecedor,
                nr_cpf: response.data.nr_cpf,
                tx_email_comercial: response.data.tx_email_comercial,
                nr_telefone_direto: response.data.nr_telefone_direto,
                nr_telefone_celular: response.data.nr_telefone_celular,
                tx_cargo: response.data.tx_cargo,
                tx_descricao_atividades: response.data.tx_descricao_atividades
            };

            $scope.enderecoCompleto = {
                id_endereco: response.data.endereco.id_endereco,
                tx_cep: response.data.endereco.tx_cep,
                sg_uf: response.data.endereco.sg_uf,
                tx_localidade: response.data.endereco.tx_localidade,
                tx_bairro: response.data.endereco.tx_bairro,
                tx_logradouro: response.data.endereco.tx_logradouro,
                tx_complemento: response.data.endereco.tx_complemento,
                nr_numero: response.data.endereco.nr_numero
            };

            //TODO -> refatorar isso aqui também, ta se repetindo.
            $http.get('http://localhost:8000/api/uf').then(function (response) {
                // $scope.enderecoCompleto.uf = response.data;
                $scope.uf = response.data;
            });
        });

        //TODO -> essa função ta duplicada, refatora-la futuramente.
        $scope.buscarEndereco = function (cep) {
            $http.get('https://viacep.com.br/ws/' + cep + '/json/').then(function (response) {
                $scope.enderecoCompleto.sg_uf = response.data.uf;
                $scope.enderecoCompleto.tx_localidade = response.data.localidade;
                $scope.enderecoCompleto.tx_bairro = response.data.bairro;
                $scope.enderecoCompleto.tx_logradouro = response.data.logradouro;
                $scope.enderecoCompleto.tx_complemento = response.data.complemento;
            });
        };

        $scope.editarFornecedor = function (fornecedor, enderecoCompleto) {
            console.log(fornecedor);
            console.log(enderecoCompleto);
            $http.put('http://localhost:8000/api/fornecedor/' + fornecedor.id_fornecedores, {
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
        }
    }

})();
