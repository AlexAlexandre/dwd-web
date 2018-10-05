/**
 * @author Alex Alexandre
 * Criado em 03/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos')
        .controller('TabelaPrecoCtrl', TabelaPrecoCtrl);

    /** @ngInject */
    function TabelaPrecoCtrl($scope, $filter, editableOptions, editableThemes, $http) {
        $http.get('http://dwddesenvolvimento-api.faromidia.com.br/api/tabela-preco').then(function (response) {
            $scope.fornecedores = response.data;
        });

        $scope.editarTabelaPreco = function (id) {
            window.location = '/#/editar-tabela-precos/' + id;
        };

        $scope.deletarTabelaPreco = function (id) {
            swal({
                title: "Você tem certeza?",
                text: "Uma vez deletado, não é possível recuperar esta informação!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        $http.delete('http://dwddesenvolvimento-api.faromidia.com.br/api/tabela-preco/' + id).then(function (response) {
                            console.log(response);
                            if(response.data = 1) {
                                swal("Parabéns!", "Tabela de preço deletado com sucesso!", "success")
                                    .then(function() {
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
