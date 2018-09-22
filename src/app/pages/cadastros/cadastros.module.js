/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros', [
        'BlurAdmin.pages.cadastros.espacos',
        'BlurAdmin.pages.cadastros.fornecedores',
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
