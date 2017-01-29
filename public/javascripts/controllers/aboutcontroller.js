/**
 * Created by Oisin on 29/01/2017.
 */
var app = angular.module('ojam');

app.controller('aboutController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'About';
}
]);
