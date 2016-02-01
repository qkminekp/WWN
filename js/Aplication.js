'use strict';

var app = angular.module( 'app' , [ 'ngRoute'  , 'controllers' , 'angular-storage'  ] );

app.config( [ '$routeProvider' , '$httpProvider' , '$locationProvider' , function( $routeProvider , $httpProvider , $locationProvider  ) {



	$locationProvider.html5Mode(true);

	// ================== Admin campaigns ====================

	$routeProvider.when( '/z6YwuU6V' , {
		controller : 'z6YwuU6V',
		templateUrl : 'templates/view.html'
	});
	$routeProvider.when( '/aCdhmf6d' , {
		controller : 'aCdhmf6d',
		templateUrl : 'templates/view.html'
	});
	$routeProvider.when( '/6oA6XJyw' , {
		controller : '6oA6XJyw',
		templateUrl : 'templates/view.html'
	});

	

	// ================== Default ====================

	$routeProvider.otherwise({
		redirectTo: '/z6YwuU6V'
	});

	

}]);





