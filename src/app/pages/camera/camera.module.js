(function () {
    'use strict';

    angular.module('BlurAdmin.pages.camera', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('camera', {
                url: '/camera',
                templateUrl: 'app/pages/camera/camera.html',
                title: 'Câmeras',
                sidebarMeta: {
                    icon: 'ion-camera',
                    order: 4,
                },
            });
    }

})();
