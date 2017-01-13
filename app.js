angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            views:
                {
                    'header': { templateUrl: 'header.html' },
                    'content': { templateUrl: 'content.html' },
                    'footer': { templateUrl: 'footer.html' },
                }
        })

});