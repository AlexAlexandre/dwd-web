(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tabelaPrecos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('tabelaPrecos', {
                url: '/tabela-precos',
                templateUrl: 'app/pages/tabelaPrecos/tabela-precos.html',
                title: 'Tabela de Preços',
                sidebarMeta: {
                    icon: 'ion-grid',
                    order: 3,
                },
            });
    }

})();
