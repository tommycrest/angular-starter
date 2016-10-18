/**
* controller.js : implementazione dei controller per le diverse pagine della nostra
* applicazione SPA
*/

'use strict';

angular.module('nameApp.controllers', []).controller('HomeController', function($scope){
    $scope.foo = function() {
        //compotamento
        console.log("HomeController.foo()");
    }
}).controller('FirstController',function($scope){
    $scope.helloFirstPage = ":D Hello DigitasLBi World!!";
    $scope.foo = function() {
        //compotamento
        console.log("FirstController.foo()");
    }
});