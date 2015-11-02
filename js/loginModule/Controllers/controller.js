/* App Controller */
loginapp.controller("loginCrtl",function($scope, $q){
	$scope.Err = "";
	$scope.UserId = "";
	$scope.Password = "";
	$scope.validUser = function(UFID, Pass){
		var q = $q.defer();
		if((UFID == "dhaval2606") && (Pass == "Password1"))
		{
			q.resolve($scope.Success());
		}
		else
		{
			q.reject("UFID or password is invalid please try again with valid data")
		}
		return q.promise;
	}
	$scope.Success = function(){
		window.location.href = "home.html"
	}
	
	$scope.checkUser = function(){
		$scope.promise = $scope.validUser($scope.UserId, $scope.Password);
		$scope.promise.then(
		function(v){$scope.Err = v},
		function(Err){$scope.Err = Err}
		)
	}
})