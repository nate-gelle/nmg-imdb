const app = angular.module('movieApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
    }).when('/movies', {
      templateUrl: '/views/movies.html'
    }).when('/genres', {
      templateUrl: '/views/genres.html'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});