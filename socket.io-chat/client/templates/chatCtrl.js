var loginModule = angular.module('chatModule', []);

/**
 * feature: Login controller
 * author: Crown
 * date: Dec/12/2015
 */
loginModule.controller('chatCtrl', ['$scope', '$http', '$sce', '$location', function ($scope, $http, $sce, $location) {
    // double data-bind with page
    $scope.user = {
        username: "",
        password: ""
    };



}]);