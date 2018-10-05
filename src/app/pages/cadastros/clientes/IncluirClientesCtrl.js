/**
 * @author Alex Alexandre
 * criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.clientes')
        .controller('IncluirClientesCtrl', IncluirClientesCtrl);

    /** @ngInject */
    function IncluirClientesCtrl($scope, $http) {

        $scope.salvarCliente = function (cliente) {
            // 'http://dwddesenvolvimento-api.faromidia.com.br/api/fornecedor'
            $http.post('http://dwddesenvolvimento-api.faromidia.com.br/api/clientes', {
                cliente: cliente
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Cliente criado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        }
    }

})();
