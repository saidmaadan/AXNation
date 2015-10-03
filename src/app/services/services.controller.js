'use strict';

angular.module('ngoApp')
  .controller('ServicesCtrl', function ($scope) {
  	$scope.members = [
  	{'benefit':'Interships'},
  	{'benefit':'Business Planning'},
  	{'benefit':'Salary (For Co-operative program)'}, 
  	{'benefit':'Event Plannng'},
  	{'benefit':'Business Marketing'},
  	{'benefit':'Website Link (Boost SEO on Google and other search engine)'},
  	{'benefit':'Contract Work'}
  	
  	];

  	$scope.partners = [
  	{'reward':'Interships'},
  	{'reward':'Volunteers (Community Service events)'},
  	{'reward':'Financial Capital'}, 
  	{'reward':'Event Plannng'},
  	{'reward':'Business Marketing'},
  	{'reward':'Website Link (Boost SEO on Google and other search engine)'},
  	{'reward':'Contract Work'}
  	
  	];
  	$scope.mimage = 'users.png';
  	$scope.pimage = 'shaking-hands.png';

  });