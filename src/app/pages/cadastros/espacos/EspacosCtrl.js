/**
 * @author Alex Alexandre
 * Criado em 06/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.espacos')
        .controller('EspacosCtrl', EspacosCtrl);

    /** @ngInject */
    function EspacosCtrl($scope, $filter, editableOptions, editableThemes, $http) {

        $scope.espacoPageSize = 10;
        $http.get('http://dwddesenvolvimento-api.faromidia.com.br/api/espacos').then(function (response) {
            console.log(response);
            $scope.espacoTable = response.data;
        });

        $scope.editarEspaco = function (id) {
            window.location = '/#/cadastros/editar-espacos/' + id;
        };

        $scope.gerenciarSalas = function (id) {
            window.location = '/#/cadastros/espacos/salas/' + id;
        };

        $scope.deletarEspaco = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete('http://dwddesenvolvimento-api.faromidia.com.br/api/espacos/' + id).then(function (response) {
                            console.log(response);
                            if(response.data = 1) {
                                swal("Parabéns!", "Espaço deletado com sucesso!", "success")
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

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


    }

})();
