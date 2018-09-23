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
                controller: 'TabelaPrecoCtrl',
                title: 'Tabela de Preços',
                sidebarMeta: {
                    icon: 'ion-grid',
                    order: 3,
                },
            })
            .state('tabelaPrecos-incluir', {
                url: '/incluir-tabela-precos',
                templateUrl: 'app/pages/tabelaPrecos/incluir-tabela-precos.html',
                // controller: 'IncluirFornecedoresCtrl',
                title: 'Incluir Tabela de Preços'
            });
    }

})();
