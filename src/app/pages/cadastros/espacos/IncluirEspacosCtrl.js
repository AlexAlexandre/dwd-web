(function () {
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('IncluirEspacosCtrl', IncluirEspacosCtrl);

    /** @ngInject */
    function IncluirEspacosCtrl($scope, $http, CONFIG) {

        //TODO remover toda essa parte de endereço para uma service
        //TODO CÓDIGO DUPLICADO
        $scope.enderecoCompleto = {
            sg_uf: null,
            tx_localidade: null,
            tx_bairro: null,
            tx_logradouro: null,
            tx_complemento: null
        };

        $http.get(CONFIG.dwdApi + '/uf').then(function (response) {
            // $scope.enderecoCompleto.uf = response.data;
            $scope.uf = response.data;
        });

        $scope.buscarEndereco = function (cep) {
            $http.get('https://viacep.com.br/ws/' + cep + '/json/').then(function (response) {
                console.log(response);
                $scope.enderecoCompleto.sg_uf = response.data.uf;
                $scope.enderecoCompleto.tx_localidade = response.data.localidade;
                $scope.enderecoCompleto.tx_bairro = response.data.bairro;
                $scope.enderecoCompleto.tx_logradouro = response.data.logradouro;
                $scope.enderecoCompleto.tx_complemento = response.data.complemento;
            });
        };

        $scope.salvarEspaco = function (espaco, enderecoCompleto) {
            $http.post(CONFIG.dwdApi + '/espacos', {
                espaco: espaco,
                enderecoCompleto: enderecoCompleto
            }).then(function (response) {
                if (response.success = true) {
                    swal("Parabéns!", "Espaço criado com sucesso!", "success")
                        .then(function () {
                            window.history.go(-1);
                        });
                }
            });
        };

    }

})();

