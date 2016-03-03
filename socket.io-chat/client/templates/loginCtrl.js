var loginModule = angular.module('loginModule', []);

/**
 * feature: Login controller
 * author: Crown
 * date: Dec/12/2015
 */
loginModule.controller('loginCtrl', ['$scope', '$http', '$sce', '$location', function ($scope, $http, $sce, $location) {
    // double data-bind with page
    $scope.user = {
        username: "",
        password: ""
    };



}]);