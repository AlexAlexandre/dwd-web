/**
 * @author Alex Alexandre
 * criado em 02/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros', [
        'BlurAdmin.pages.cadastros.espacos',
        'BlurAdmin.pages.cadastros.fornecedores',
        'BlurAdmin.pages.cadastros.clientes',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('cadastros', {
                url: '/cadastros',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Cadastros',
                sidebarMeta: {
                    icon: 'ion-folder',
                    order: 1,
                },
            });
    }

})();
