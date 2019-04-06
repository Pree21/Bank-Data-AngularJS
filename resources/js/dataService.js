app.factory('dataService', function($q,$http){
	var api = {};
	
	api.getBanks = function(city){
		var deferred = $q.defer();
		$http.get('https://vast-shore-74260.herokuapp.com/banks?city='+city).then(function(response){
			deferred.resolve(response.data);
		});
		return deferred.promise;
	};
	
	return api;
});
