angular.module('pro-git.controllers').controller('login', ['$scope', '$filter', '$state', '$rootScope', '$http', '$q', 'LoginService',
    function($scope, $filter, $state, $rootScope, $http, $q, LoginService) {

        $scope.username = '';
        $scope.password = '';
        $scope.isLoginError = false;
        $scope.error = ''

        $scope.login = function() {
            if ($scope.username !== '' && $scope.password !== '') {
                LoginService.login($scope.username, $scope.password, function(isValid) {
                    if (isValid) {
                        $state.go('dashboard');
                    } else {
                        $scope.isLoginError = true;
                        $scope.error = 'Invalid Username/ Password';
                    }
                })
            }
        }
    }
])