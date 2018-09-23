/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.espacos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('cadastros.espacos', {
                url: '/espacos',
                templateUrl: 'app/pages/cadastros/espacos/espacos.html',
                controller: 'EspacosCtrl',
                title: 'Espaços',
                sidebarMeta: {
                    order: 1,
                },
            })
            .state('cadastros.espacos-incluir', {
                url: '/incluir-espacos',
                templateUrl: 'app/pages/cadastros/espacos/incluir-espacos.html',
                controller: 'IncluirEspacosCtrl',
                title: 'Incluir Espaços'
            });
    }

})();
