/**
 * @author Alex Alexandre
 * created on 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.espacos')
        .controller('EditarEspacosSalasCtrl', EditarEspacosSalasCtrl);

    /** @ngInject */
    function EditarEspacosSalasCtrl($scope, $http, $stateParams) {

        $http.get('http://dwddesenvolvimento-api.faromidia.com.br/api/salas/' + $stateParams.id).then(function (response) {
            console.log(response.data);
            $scope.sala = {
                id_salas: response.data.id_salas,
                tx_nome_salas: response.data.tx_nome_salas,
                nr_metragem_salas: response.data.nr_metragem_salas,
                nr_altura_pe_direito_salas: response.data.nr_altura_pe_direito_salas
            };

        });

        $scope.editarEspaco = function (espaco) {
            console.log(espaco);
            $http.put('http://dwddesenvolvimento-api.faromidia.com.br/api/espacos/' + espaco.id_espacos, {
                espaco: espaco
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Espaço editado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        }
    }

})();
