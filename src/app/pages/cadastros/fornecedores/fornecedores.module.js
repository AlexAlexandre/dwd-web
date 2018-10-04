/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores', ['ngRoute'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('cadastros.fornecedores', {
                url: '/fornecedores',
                templateUrl: 'app/pages/cadastros/fornecedores/fornecedores.html',
                controller: 'FornecedoresCtrl',
                title: 'Fornecedores',
                sidebarMeta: {
                    order: 2,
                },
            })
            .state('cadastros.fornecedores-incluir', {
                url: '/incluir-fornecedores',
                templateUrl: 'app/pages/cadastros/fornecedores/incluir-fornecedores.html',
                controller: 'IncluirFornecedoresCtrl',
                title: 'Incluir Fornecedores'
            })
            .state('cadastros.fornecedores-editar', {
                url: '/editar-fornecedores/:id',
                templateUrl: 'app/pages/cadastros/fornecedores/editar-fornecedores.html',
                controller: 'EditarFornecedoresCtrl',
                title: 'Editar Fornecedores'
            });
    }

})();
