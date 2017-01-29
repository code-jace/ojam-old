var app = angular.module('ojam', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/user.ejs',
                controller  : 'userController'
            })

            // route for the about page
            .when('/host', {
                templateUrl : 'pages/host.ejs',
                controller  : 'hostController'
            })

             // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.ejs',
                controller  : 'contactController'
            });


    });


  
  


