/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cadastros', {
                url: '/cadastros',
                template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                // controller: 'TablesPageCtrl',
                title: 'Cadastros',
                sidebarMeta: {
                    icon: 'ion-folder',
                    order: 2,
                },
            }).state('cadastros.espacos', {
            url: '/espacos',
            templateUrl: 'app/pages/cadastros/espacos/espacos.html',
            title: 'Espaços',
            sidebarMeta: {
                order: 0,
            },
        }).state('cadastros.fornecedores', {
            url: '/fornecedores',
            templateUrl: 'app/pages/cadastros/fornecedores/fornecedores.html',
            title: 'Fornecedores',
            sidebarMeta: {
                order: 100,
            },
        });
        $urlRouterProvider.when('/espacos','/cadastros/fornecedores');
    }

})();
