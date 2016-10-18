angular.module('nameApp.services', [])
    .value('version', '0.1')
    .constant('ENDPOINT_API', {
        'url' : 'http://localhost:8000/api/'
    }).factory('nameAppServices', function($http, ENDPOINT_API){
    
    var consumeAPI = {};
    
    //GET
    
    //POST
    
    //PUT
    
    //DELETE
    
    
    return consumeAPI;
    
});