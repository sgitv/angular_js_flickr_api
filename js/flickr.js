var myApp = angular.module("myApp",[]);
myApp.controller("mainController",function($scope,$http) {
	$scope.alertPress = function() {		
		$http({
				method: 'GET',
				url: '  https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=511be5aef036cc8cd60cbf997f9be6d2&tags='+$scope.tag+'&extras=url_s&format=json&nojsoncallback=1'
			 }).then(function successCallback(response)	{
					console.log("good");
					console.log("status=",response);
					$scope.urli=response;					
				}, 
				function errorCallback(response) {
					console.log("response is not getting");
			});
	}
	$scope.zoOm = function(a){
		$scope.siZe=a.replace('_m','_c');	
		console.log($scope.siZe);
	}
});