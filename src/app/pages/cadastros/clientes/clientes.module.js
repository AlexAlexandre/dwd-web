/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.clientes', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('cadastros.clientes', {
                url: '/clientes',
                templateUrl: 'app/pages/cadastros/clientes/clientes.html',
                controller: 'ClientesCtrl',
                title: 'Clientes',
                sidebarMeta: {
                    order: 3,
                },
            })
            .state('cadastros.clientes-incluir', {
                url: '/incluir-clientes',
                templateUrl: 'app/pages/cadastros/clientes/incluir-clientes.html',
                controller: 'IncluirClientesCtrl',
                title: 'Incluir Clientes'
            })
            .state('cadastros.clientes-editar', {
                url: '/editar-clientes/:id',
                templateUrl: 'app/pages/cadastros/clientes/editar-clientes.html',
                controller: 'EditarClientesCtrl',
                title: 'Editar Clientes'
            });
    }

})();
