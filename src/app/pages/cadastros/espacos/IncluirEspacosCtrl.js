(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('IncluirEspacosCtrl', IncluirEspacosCtrl);

  /** @ngInject */
  function IncluirEspacosCtrl($scope, $http, CONFIG) {

      $scope.salvarEspaco = function (espaco) {
        console.log(espaco);
          $http.post(CONFIG.dwdApi + '/espacos', {
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

