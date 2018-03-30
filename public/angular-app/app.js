var app = angular.module('pirsonal-app',['ngRoute']).config(config);

function config($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
            .when('/', {
                templateUrl: './angular-app/home/index.html',
                controller: CompositionController,
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/'
            });
}