/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.cadastros.fornecedores')
        .controller('FornecedoresCtrl', FornecedoresCtrl);

    /** @ngInject */
    function FornecedoresCtrl($scope, $filter, editableOptions, editableThemes, $http) {


        $scope.smartTablePageSize = 10;

        $http.get('http://localhost:8000/api/fornecedor').then(function (response) {
            console.log(response);
            $scope.fornecedorTable = response.data;
        });

        // $scope.editableTableData = $scope.smartTableData.slice(0, 36);



        $scope.showGroup = function(user) {
            if(user.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, {id: user.group});
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        $scope.showStatus = function(user) {
            var selected = [];
            if(user.status) {
                selected = $filter('filter')($scope.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
        };


        $scope.deletarFornecedor = function(id) {
            $http.delete('http://localhost:8000/api/fornecedor', {id: id}).then(function (response) {
                console.log(response);

            });
        };

        $scope.addUser = function() {
            $scope.inserted = {
                id: $scope.users.length+1,
                name: '',
                status: null,
                group: null
            };
            $scope.users.push($scope.inserted);
        };

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';
    }

})();
