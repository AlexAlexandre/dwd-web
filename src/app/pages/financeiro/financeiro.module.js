(function () {
    'use strict';

    angular.module('BlurAdmin.pages.financeiro', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('financeiro', {
                url: '/financeiro',
                templateUrl: 'app/pages/financeiro/financeiro.html',
                title: 'Financeiro',
                sidebarMeta: {
                    icon: 'ion-cash',
                    order: 5,
                },
            });
    }

})();
