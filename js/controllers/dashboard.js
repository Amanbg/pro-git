angular.module('pro-git.controllers').controller('dashboard', ['$scope', '$filter', '$state', '$rootScope', '$http', '$q',
    function($scope, $filter, $state, $rootScope, $http, $q) {

        // function getModules() {
        //     // perform some asynchronous operation, resolve or reject the promise when appropriate.
        //     return $q(function(resolve, reject) {
        //         setTimeout(function() {
        //             $http.get('/modules').then(function(response) {
        //                 resolve(response);
        //             }, function(error) {
        //                 reject('API error >', error);
        //             })
        //         }, 100);
        //     });
        // }

        // var promise = getModules();
        // promise.then(function(data) {
        //     console.log(data)
        //     $scope.modulesList = data;
        // }, function(error) {
        //     throw new Error(error);
        // });

        function getModules(callback) {
            $http.get('/modules').then(function(response) {
                callback(response);
            }, function(error) {
                callback(null);
            })
        }

        function getUser(callback, callback1) {
            $http.get('/user').then(function(response) {
                $scope.user = response.data;
                callback(callback1);
            }, function(error) {
                callback(null);
            })
        }

        getUser(getModules, function(res) {
            $scope.modulesList = res.data;
        })
    }
])