(function () {
    'use strict';

    angular.module('BlurAdmin.pages.relatorios', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('relatorios', {
                url: '/relatorios',
                templateUrl: 'app/pages/relatorios/relatorios.html',
                title: 'Relatórios',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 6,
                },
            });
    }

})();
