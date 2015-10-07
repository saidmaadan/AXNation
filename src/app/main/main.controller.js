'use strict';

var app = angular.module('ngoApp');
  
    
   var client_id = '7a524bcc2f6240fc8791f6e98bfb2267';
 

 app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = 'https://api.instagram.com/v1/users/1048532412/media/recent/';
        endpoint += '?count=99';
        endpoint += '&client_id=' + client_id;
        endpoint += '&callback=JSON_CALLBACK';
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    };
  }]);

 app.controller('MainCtrl', function ($scope, InstagramAPI) {

    $scope.data = {};
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
    });
  
    $scope.myInterval = 5000;
    $scope.slides = [
      {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slide-c.jpg'},
      {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider9.jpg'},
      {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider10.jpg'},
      {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider3.jpg'},
      {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider5.jpg'} 
      
      //{'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider11.jpg'},
      // {'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider2.jpg'},
      //{'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider6.jpg'},
      //{'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider7.jpg'},
      //{'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider8.jpg'},
      //{'image' : 'https://s3.amazonaws.com/inventtive/axnation/slider4.jpg'},
      //{'image' : 'caro.png'},
      // {'image' : 'caro-2.jpg'},
      // {'image' : 'caro1.jpg'},
      // {'image' : 'caro2.jpg'},
      // {'image' : 'caro4.jpg'},
      // {'image' : 'caro5.jpg'},
      // {'image' : 'caro7.jpg'},
      // {'image' : 'caro8.jpg'},
      // {'image' : 'd-img.jpg'},
      // {'image' : 'd-img1.jpg'},
      // {'image' : 'd-img2.jpg'},
      // {'image' : 'caro18.jpg'}

    ];

    $scope.headline='WE ARE BUILDING A GLOBAL BLACK MOVEMENT';
    $scope.subheadline='AXNATION focused on unifying and uplifting black communities across the diaspora.';
    $scope.involved='Get Involved';

    $scope.youtubeId = 'BKohxAjqxCY'; 
    $scope.line_image = 'bgs9.png';


   // $scope.tweets = tweets.get({
   //    widgetId: '599429842375823360'
   //  }).success(function(data){
   //    $scope.tweets = data;
   //  });
 });