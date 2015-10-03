'use strict';

var app = angular.module('ngoApp');


  var client_id = '7a524bcc2f6240fc8791f6e98bfb2267';
 

 app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPopular: function(callback){
        var endpoint = 'https://api.instagram.com/v1/users/1048532412/media/recent/';
        endpoint += '?count=30';
        endpoint += '&client_id=' + client_id;
        endpoint += '&callback=JSON_CALLBACK';
        $http.jsonp(endpoint).success(function(response){
          callback(response.data);
        });
      }
    };
  }]);

 app.controller('EventsCtrl', function ($scope, InstagramAPI) {
    $scope.data = {};
    InstagramAPI.fetchPopular(function(data){
      $scope.pics = data;
    });

    // $scope.youtubeId = 'BKohxAjqxCY'; 
    $scope.ytubes = [
    {'video': 'BKohxAjqxCY'},
    {'video': 'hAy22V69smM'}];

     // $scope.videos =[
     // {'video1': 'https://www.youtube.com/embed/BKohxAjqxCY'},
     // {'video2': 'https://youtu.be/C-w89WKQjlg'},
     // {'video3': 'https://youtu.be/hAy22V69smM'}
     // // {'video4': 'https://youtu.be/AWAftZN1wyw'},
     // // {'video5': 'https://youtu.be/I0qhxej2wdA'},
     // // {'video6': 'https://youtu.be/7Hmhmdg0wQE'}
     // ];

     $scope.instagram = 'instagram_.png';
     $scope.youtube = 'youtube_.png';
      $scope.twitter = 'twitter_.png';
     });

