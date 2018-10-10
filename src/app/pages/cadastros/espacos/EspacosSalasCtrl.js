/**
 * @author Alex Alexandre
 * Criado em 06/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.espacos')
        .controller('EspacosSalasCtrl', EspacosSalasCtrl);

    /** @ngInject */
    function EspacosSalasCtrl($scope, $filter, editableOptions, editableThemes, $http, $stateParams, CONFIG) {
        console.log('espaco sla contron');

        $http.get(CONFIG.dwdApi + '/espacos/salas/' + $stateParams.id).then(function (response) {
            console.log(response);
            $scope.espacoSalaTable = response.data;
        });


        $scope.editarSala = function (id) {
            window.location = '/#/cadastros/espacos/salas-editar/' + id;
        };


        $scope.deletarSala = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        // $http.delete(CONFIG.dwdApi + '/espacos/salas' + id).then(function (response) {
                        //     console.log(response);
                        //     if(response.data = 1) {
                        //         swal("Parabéns!", "Sala deletada com sucesso!", "success")
                        //             .then(function () {
                        //                 location.reload();
                        //             });
                        //
                        //     }
                        // });
                    } else {
                        // console.log('não faz nada');
                    }
                });
        };
    }

})();
