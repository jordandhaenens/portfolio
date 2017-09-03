"use strict"; 
console.log("This is app.js loaded");

const app = angular.module('Me', ['ngRoute']);

app.config( ($routeProvider) => {

    $routeProvider
    .when('/', {
        templateUrl: '/partials/homeView.html',
        controller: 'HomeViewCtrl'
    })
    .otherwise('/');
    
} );