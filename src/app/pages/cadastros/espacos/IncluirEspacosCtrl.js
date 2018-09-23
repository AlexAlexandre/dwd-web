(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('IncluirEspacosCtrl', IncluirEspacosCtrl);

  /** @ngInject */
  function IncluirEspacosCtrl($scope) {
   var vm = this;
   console.log(this);

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

  }

})();

