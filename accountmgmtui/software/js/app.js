'use strict';

const ACCOUNT_CMD_HOST = 'http://54.200.117.129:32774/';
const ACCOUNT_QUERY_HOST = 'http://54.200.117.129:32774/';
const ACCOUNT_TRANSFER_HOST = 'http://54.200.117.129:8081/';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['ngRoute', 'autocomplete', 'AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/accounts', {
        templateUrl: 'accounts/layout.html',
        controller: AccountsController
    });

    $routeProvider.otherwise({redirectTo: '/accounts'});
}]);






