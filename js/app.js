var WGWebsite = angular.module('wilsongulliswebsite',['ngRoute','ngResource']);

WGWebsite.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/', {
			templateUrl: 'partials/home.html'
		}).
		otherwise({
        redirectTo: '/home.html'
      });
}]);