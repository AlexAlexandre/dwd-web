/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores')
        .controller('FornecedoresCtrl', FornecedoresCtrl);

    /** @ngInject */
    function FornecedoresCtrl($scope, $filter, editableOptions, editableThemes, $http) {


        $scope.smartTablePageSize = 10;

        $http.get('http://localhost:8000/api/fornecedor').then(function (response) {
            console.log(response);
            $scope.fornecedorTable = response.data;
        });

        $scope.editarFornecedor = function (id) {
            window.location = '/#/cadastros/editar-fornecedores/' + id;
        };

        $scope.deletarFornecedor = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete('http://localhost:8000/api/fornecedor/' + id).then(function (response) {
                            console.log(response);
                            if(response.data = 1) {
                                swal("Parabéns!", "Fornecedor deletado com sucesso!", "success")
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
