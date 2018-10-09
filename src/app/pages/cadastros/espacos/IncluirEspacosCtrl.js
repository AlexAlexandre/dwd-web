(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('IncluirEspacosCtrl', IncluirEspacosCtrl);

  /** @ngInject */
  function IncluirEspacosCtrl($scope, $http) {

      $http.get('http://dwddesenvolvimento-api.faromidia.com.br/api/listar-tabela-preco').then(function (response) {
          console.log('tabela de preco');
          console.log(response);
          $scope.tabelaPreco = response.data;
      });

      $scope.salvarEspaco = function (espaco) {
        console.log(espaco);
          // 'http://dwddesenvolvimento-api.faromidia.com.br/api/espacos'
          $http.post('http://dwddesenvolvimento-api.faromidia.com.br/api/espacos', {
              espaco: espaco
          }).then(function (response) {
              if (response.success = true) {
                  swal("Parabéns!", "Espaço criado com sucesso!", "success")
                      .then(function () {
                          window.history.go(-1);
                      });
              }
          });
      };

      $scope.salvarEspacoTabelaPreco = function (espaco) {
        console.log(espaco);
      };


   var vm = this;
   console.log(this);

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

  }

})();

