(function () {
    'use strict';

    angular.module('BlurAdmin.pages.agenda', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('agenda', {
                url: '/agenda',
                templateUrl: 'app/pages/agenda/agenda.html',
                controller: 'AgendaCtrl',
                title: 'Agenda',
                sidebarMeta: {
                    icon: 'ion-calendar',
                    order: 4,
                },
            });
    }

})();
