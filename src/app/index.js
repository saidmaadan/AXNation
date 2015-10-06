'use strict';

angular.module('ngoApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router','ui.bootstrap', 'ui.mask','ngMap','adaptive.youtube'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

     // pretty Angular URLs
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })

       .state('events', {
        url: '/events',
        templateUrl: 'app/events/event.html',
        controller: 'EventsCtrl'
      })

       .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesCtrl'
      })

       .state('donate', {
        url: '/donate',
        templateUrl: 'app/donate/donate.html',
        controller: 'DonateCtrl'
      })

       .state('getinvolved', {
        url: '/getinvolved',
        templateUrl: 'app/getinvolved/getinvolved.html',
        controller: 'GetInvolvedCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
