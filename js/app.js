var WGWebsite = angular.module('wilsongulliswebsite',['ngRoute','ngResource']);

WGWebsite.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html'
		}).
		when('/blog', {
			templateUrl: 'partials/blog.html'
		}).
		otherwise({
        redirectTo: '/home'
      });
}]);