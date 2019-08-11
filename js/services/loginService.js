angular.module('pro-git.services', []).service('LoginService', ['$window', '$q', '$http', '$rootScope', function($window, $q, $http, $rootScope) {

    this.login = function(username, password, callback) {
        var admin = 'admin';
        var pass = 'password';
        var isAuthenticated = false;

        isAuthenticated = username === admin && password === pass;
        callback(isAuthenticated);
    }
}])