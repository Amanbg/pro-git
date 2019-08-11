angular.module('pro-git').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider,
    $urlRouterProvider, $locationProvider, $httpProvider) {
    $stateProvider
        .state('login', {
            url: "/",
            views: {
                "mainContent": {
                    'templateUrl': "views/login.html"
                }
            }
        })

        .state('dashboard', {
            url: "/dashboard",
            views: {
                "mainContent": {
                    'templateUrl': "views/dashboard.html"
                }
            }
        })
}])