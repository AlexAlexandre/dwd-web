/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
        'ui.router',

        'BlurAdmin.pages.dashboard',
        'BlurAdmin.pages.cadastros',
        'BlurAdmin.pages.tabelaPrecos',
        'BlurAdmin.pages.agenda',
        'BlurAdmin.pages.camera',
        'BlurAdmin.pages.financeiro',
        'BlurAdmin.pages.relatorios',
        // 'BlurAdmin.pages.ui',
        // 'BlurAdmin.pages.components',
        'BlurAdmin.pages.form',
        // 'BlurAdmin.pages.tables',
        // 'BlurAdmin.pages.charts',
        // 'BlurAdmin.pages.maps',
        // 'BlurAdmin.pages.profile',
        'BlurAdmin.config'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }

})();
