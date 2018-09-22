/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.cadastros.fornecedores', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('cadastros.fornecedores', {
          url: '/fornecedores',
          templateUrl: 'app/pages/cadastros/fornecedores/fornecedores.html',
          controller: 'FornecedoresCtrl',
          title: 'Fornecedores',
          sidebarMeta: {
            order: 2,
          },
        });
  }

})();
