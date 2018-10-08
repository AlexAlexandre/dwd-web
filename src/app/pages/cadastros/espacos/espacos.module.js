/**
 * @author Alex Alexandre
 * Criado em 07/10/2018
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
            })
            .state('cadastros.espacos-editar', {
                url: '/editar-espacos/:id',
                templateUrl: 'app/pages/cadastros/espacos/editar-espacos.html',
                controller: 'EditarEspacosCtrl',
                title: 'Editar Espaços'
            });
    }

})();
