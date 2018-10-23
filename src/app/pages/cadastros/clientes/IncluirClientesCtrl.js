/**
 * @author Alex Alexandre
 * criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.clientes')
        .controller('IncluirClientesCtrl', IncluirClientesCtrl, ['$scope', function($scope) {
            $scope.validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        }]);


    /** @ngInject */
    function IncluirClientesCtrl($scope, $http, CONFIG) {

        $scope.salvarCliente = function (cliente) {
            $http.post(CONFIG.dwdApi + '/clientes', {
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
