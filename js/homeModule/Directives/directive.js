/*Home directive*/

app.directive("allShoes", function(){
	return{
		restrict : "E",		
		templateUrl  : 'productTemp.html'		
	}
});
app.directive("shoesDetails", function(){
	return{
		restrict : "E",
		templateUrl : "productDetails.html"		
	}
});
 /*app.directive("search", function(){
	return{
		restrict : "E",
		template : "<div class='pt-s pull-right'><input class='searchBox' type='text' placeholder = 'Search here' ng-model = 'searchBox' /></div>",
		link: function($scope, element){
			element.bind('blur', function(){
		if($scope.searchBox == "adidas"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			$scope.AdiClass = true;
			$scope.FilaClass = false;
			$scope.LottoClass = false;
			$scope.NikeClass = false;
		}
		else if($scope.searchBox == "fila"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			$scope.AdiClass = false;
			$scope.FilaClass = true;
			$scope.LottoClass = false;
			$scope.NikeClass = false;
		} 
		else if($scope.searchBox == "lotto"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			$scope.AdiClass = false;
			$scope.FilaClass = false;
			$scope.LottoClass = true;
			$scope.NikeClass = false;
		}
		else if($scope.searchBox == "nike"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			$scope.AdiClass = false;
			$scope.FilaClass = false;
			$scope.LottoClass = false;
			$scope.NikeClass = true;
		}
		else if($scope.searchBox == ""){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			$scope.AdiClass = true;
			$scope.FilaClass = true;
			$scope.LottoClass = true;
			$scope.NikeClass = true;
		}
		else{
			$scope.AdiClass = false;
			$scope.FilaClass = false;
			$scope.LottoClass = false;
			$scope.NikeClass = false;
			document.getElementById("jqNoMatch").className = "show pt-m align-c";
		}
			});
		}
	}
});*/
