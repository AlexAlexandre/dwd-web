// angular.module('BlurAdmin',[]).constant("CONFIG", {
//     dwdApi: "http://localhost:8000/api"
//     // dwdApi: "http://dwddesenvolvimento-api.faromidia.com.br/api"
// });

/**
 * @author Alex Alexandre
 * created on 10/10/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.config', []).constant("CONFIG", {
        dwdApi: "http://localhost:8000/api"
        // dwdApi: "http://dwddesenvolvimento-api.faromidia.com.br/api"
    });

    // /** @ngInject */
    // function routeConfig($urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/dashboard');
    // }

})();
