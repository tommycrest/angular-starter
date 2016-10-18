/**
* app.js : entry point della nostra applicazione angular js
*/

'use strict';

require('angular/angular');
require('angular-route/angular-route');

require('./controller');
require('./filter');
require('./service');

angular.module('nameApp',['nameApp.controllers',
                          'nameApp.filters',
                          'nameApp.services',
                          'ngRoute']).config(['$routeProvider', function($routeProvider){
    
	   $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: 'HomeController'}).
        when('/first', {templateUrl: 'app/partials/first.html', controller: 'FirstController'}).
		otherwise({redirectTo: '/home'});
}]);