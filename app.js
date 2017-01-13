angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('main',{
            url: '/main',
            template: '<h1>Welcome to angular-ui-router demo.'
        })
        .state('home', {
            url: '/home',
            views:
                {
                    'header': {
                        templateUrl: '/header.html'
                    },
                    'content': {
                        templateUrl: '/content.html'
                    },
                    'footer': {
                        templateUrl: '/footer.html'
                    },
                }
        })

});