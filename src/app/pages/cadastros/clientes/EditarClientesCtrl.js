/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.clientes')
        .controller('EditarClientesCtrl', EditarClientesCtrl);

    /** @ngInject */
    function EditarClientesCtrl($scope, $http, $stateParams, CONFIG) {
        $http.get(CONFIG.dwdApi + '/clientes/' + $stateParams.id).then(function (response) {
            $scope.cliente = {
                id_clientes: response.data.id_clientes,
                tx_razao_social: response.data.tx_razao_social,
                nr_cnpj_cliente: response.data.nr_cnpj_cliente,
                nr_inscricao_estadual: response.data.nr_inscricao_estadual,
                nr_inscricao_municipal: response.data.nr_inscricao_municipal,
                tx_nome_fantasia: response.data.tx_nome_fantasia,
                tx_nome_contato: response.data.tx_nome_contato,
                tx_email_comercial: response.data.tx_email_comercial,
                nr_telefone: response.data.nr_telefone
            };

        });

        $scope.editarCliente = function (cliente) {
            $http.put(CONFIG.dwdApi + '/clientes/' + $scope.cliente.id_clientes, {
                cliente: cliente
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Cliente editado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        }
    }

})();
