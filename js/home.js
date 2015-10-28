/* Home JS*/

var app = angular.module("homeApp",[]);

app.directive("adidasShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in adiRecords' ng-click='adiDetails(adiRecord.id)'>" +
							"<div><img src='{{adiRecord.src}}' width='210' height = '150' /></div>" +
							"<div class='pt-m'>Adidas {{adiRecord.shoesType}} Shoes</div>" + 
							"<div class='clearfix pt-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>({{adiRecord.ratings}} ratings)</span>" +
							"</div>" +
							"<div class='clearfix pt-s'><span>Rs {{adiRecord.currPrice}}</span> <span class='pl-s linrThrought txt-light'>Rs {{adiRecord.prevPrice}}</span><span class='text-success pl-s'>{{adiRecord.discount}}</span> </div>" +
						"</div>" 
		
	}
});
app.directive("filaShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in filaRecords'>" +
							"<div><img src='{{adiRecord.src}}' width='210' height = '150' /></div>" +
							"<div class='pt-m'>Fila {{adiRecord.shoesType}} Shoes</div>" + 
							"<div class='clearfix pt-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>({{adiRecord.ratings}} ratings)</span>" +
							"</div>" +
							"<div class='clearfix pt-s'><span>Rs {{adiRecord.currPrice}}</span> <span class='pl-s linrThrought txt-light'>Rs {{adiRecord.prevPrice}}</span><span class='text-success pl-s'>{{adiRecord.discount}}</span> </div>" +
						"</div>" 
		
	}
});
app.directive("lottoShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in lottoRecords'>" +
							"<div><img src='{{adiRecord.src}}' width='210' height = '150' /></div>" +
							"<div class='pt-m'>Lotto {{adiRecord.shoesType}} Shoes</div>" + 
							"<div class='clearfix pt-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>({{adiRecord.ratings}} ratings)</span>" +
							"</div>" +
							"<div class='clearfix pt-s'><span>Rs {{adiRecord.currPrice}}</span> <span class='pl-s linrThrought txt-light'>Rs {{adiRecord.prevPrice}}</span><span class='text-success pl-s'>{{adiRecord.discount}}</span> </div>" +
						"</div>" 
		
	}
});
app.directive("nikeShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in nikeRecords'>" +
							"<div><img src='{{adiRecord.src}}' width='210' height = '150' /></div>" +
							"<div class='pt-m'>Nike {{adiRecord.shoesType}} Shoes</div>" + 
							"<div class='clearfix pt-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>({{adiRecord.ratings}} ratings)</span>" +
							"</div>" +
							"<div class='clearfix pt-s'><span>Rs {{adiRecord.currPrice}}</span> <span class='pl-s linrThrought txt-light'>Rs {{adiRecord.prevPrice}}</span><span class='text-success pl-s'>{{adiRecord.discount}}</span> </div>" +
						"</div>" 
		
	}
});
app.controller("brandController", function($scope){

	$scope.adiRecords = [
	{
		"id" : "Adi1",
		"src" : "img/Adidas/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "Adi2",
		"src" : "img/Adidas/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "Adi3",
		"src" : "img/Adidas/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "Adi4",
		"src" : "img/Adidas/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "Adi5",
		"src" : "img/Adidas/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "Adi6",
		"src" : "img/Adidas/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "Adi7",
		"src" : "img/Adidas/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "Adi8",
		"src" : "img/Adidas/shoes7.jpeg",
		"shoesType" : "Running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	}
	];
	$scope.filaRecords = [
	{
		"id" : "fila1",
		"src" : "img/fila/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "fila2",
		"src" : "img/fila/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "fila3",
		"src" : "img/fila/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "fila4",
		"src" : "img/fila/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "fila5",
		"src" : "img/fila/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "fila6",
		"src" : "img/fila/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "fila7",
		"src" : "img/fila/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "fila8",
		"src" : "img/fila/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5,099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	}
	];
	$scope.lottoRecords = [
	{
		"id" : "lotto1",
		"src" : "img/lotto/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "lotto2",
		"src" : "img/lotto/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "lotto3",
		"src" : "img/lotto/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "lotto4",
		"src" : "img/lotto/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "lotto5",
		"src" : "img/lotto/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "lotto6",
		"src" : "img/lotto/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "lotto7",
		"src" : "img/lotto/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "lotto8",
		"src" : "img/lotto/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5,099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	}
	];
	$scope.nikeRecords = [
	{
		"id" : "nike1",
		"src" : "img/nike/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "nike2",
		"src" : "img/nike/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "nike3",
		"src" : "img/nike/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "nike4",
		"src" : "img/nike/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "nike5",
		"src" : "img/nike/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "nike6",
		"src" : "img/nike/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "nike7",
		"src" : "img/nike/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "nike8",
		"src" : "img/nike/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5,099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	}
	];
	
	$scope.allProduct = [
		{
		"id" : "Adi1",
		"src" : "img/Adidas/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "Adi2",
		"src" : "img/Adidas/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "Adi3",
		"src" : "img/Adidas/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "Adi4",
		"src" : "img/Adidas/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "Adi5",
		"src" : "img/Adidas/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "Adi6",
		"src" : "img/Adidas/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "Adi7",
		"src" : "img/Adidas/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "Adi8",
		"src" : "img/Adidas/shoes7.jpeg",
		"shoesType" : "Running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	},
	{
		"id" : "fila1",
		"src" : "img/fila/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "fila2",
		"src" : "img/fila/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "fila3",
		"src" : "img/fila/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "fila4",
		"src" : "img/fila/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "fila5",
		"src" : "img/fila/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "fila6",
		"src" : "img/fila/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "fila7",
		"src" : "img/fila/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "fila8",
		"src" : "img/fila/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	},
	{
		"id" : "lotto1",
		"src" : "img/lotto/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "lotto2",
		"src" : "img/lotto/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "lotto3",
		"src" : "img/lotto/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "lotto4",
		"src" : "img/lotto/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "lotto5",
		"src" : "img/lotto/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "lotto6",
		"src" : "img/lotto/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "lotto7",
		"src" : "img/lotto/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "lotto8",
		"src" : "img/lotto/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	},
	{
		"id" : "nike1",
		"src" : "img/nike/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "nike2",
		"src" : "img/nike/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "nike3",
		"src" : "img/nike/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "nike4",
		"src" : "img/nike/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "nike5",
		"src" : "img/nike/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "nike6",
		"src" : "img/nike/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "nike7",
		"src" : "img/nike/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "nike8",
		"src" : "img/nike/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	}
	];
	$scope.adiDetails = function(adiid){
		if(adiid == "Adi1"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("adi").className = "show";
		}
	}
	$scope.hideceta = function(){
		angular.element(jqCatagories).removeClass("show").addClass("hide");
		angular.element(jqDownArrow).removeClass("show").addClass("hide");
		angular.element(jqUpArrow).addClass("show");		
	}
	$scope.showceta = function(){		
		angular.element(jqUpArrow).removeClass("show").addClass("hide");
		angular.element(jqCatagories).removeClass("hide").addClass("show");
		angular.element(jqDownArrow).addClass("show");
				
	}
	$scope.hidecetaPri = function(){
		angular.element(jqCatagoriesPri).removeClass("show").addClass("hide");
		angular.element(jqDownArrowPri).removeClass("show").addClass("hide");
		angular.element(jqUpArrowPri).addClass("show");		
	}
	$scope.showcetaPri = function(){		
		angular.element(jqUpArrowPri).removeClass("show").addClass("hide");
		angular.element(jqCatagoriesPri).removeClass("hide").addClass("show");
		angular.element(jqDownArrowPri).addClass("show");
				
	}
	$scope.checkFilter = function(){
		if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.filafilterModel && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.filafilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.filafilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if(!($scope.adidasFilter) && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else{
			angular.element(filaProduct).removeClass("hide");
			angular.element(lottoProduct).removeClass("hide");
			angular.element(nikeProduct).removeClass("hide");
		}
	}
	$scope.filaFilter = function(){
		if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.filafilterModel) && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel && $scope.filafilterModel && $scope.nikefilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.filafilterModel) && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.filafilterModel) && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel && !($scope.filafilterModel) && $scope.nikefilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.filafilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
		}
		else if($scope.lottofilterModel && $scope.filafilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel && !($scope.filafilterModel)){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
		}
		else if($scope.nikefilterModel && $scope.filafilterModel){
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.nikefilterModel && !($scope.filafilterModel)){
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
		}
		else if($scope.filafilterModel){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else{
			angular.element(adidasProduct).removeClass("hide");
			angular.element(lottoProduct).removeClass("hide");
			angular.element(nikeProduct).removeClass("hide");
		}
	}
	$scope.lottoFilter = function(){
		if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && !($scope.lottofilterModel) && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.nikefilterModel && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.filafilterModel && $scope.nikefilterModel && $scope.lottofilterModel){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && !($scope.lottofilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
		}
		else if($scope.adidasFilter && $scope.nikefilterModel && !($scope.lottofilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
		}
		else if($scope.filafilterModel && $scope.nikefilterModel && !($scope.lottofilterModel)){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
		}
		else if($scope.adidasFilter && $scope.lottofilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.lottofilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
		}
		else if($scope.filafilterModel && $scope.lottofilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.filafilterModel && !($scope.lottofilterModel)){
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.nikefilterModel && $scope.lottofilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.nikefilterModel && !($scope.lottofilterModel)){
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel){
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else{
			angular.element(adidasProduct).removeClass("hide");
			angular.element(filaProduct).removeClass("hide");
			angular.element(nikeProduct).removeClass("hide");
		}
	}
	$scope.nikeFilter = function(){
		if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.lottofilterModel && !($scope.nikefilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.filafilterModel && $scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && $scope.filafilterModel && !($scope.nikefilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.adidasFilter && $scope.lottofilterModel && !($scope.nikefilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.filafilterModel && $scope.lottofilterModel && !($scope.nikefilterModel)){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.adidasFilter && $scope.nikefilterModel){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.adidasFilter && !($scope.nikefilterModel)){
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.filafilterModel && $scope.nikefilterModel){
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.filafilterModel && !($scope.nikefilterModel)){
			angular.element(nikeProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel && $scope.nikefilterModel){
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else if($scope.lottofilterModel && !($scope.nikefilterModel)){
			angular.element(nikeProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
		}
		else if($scope.nikefilterModel){
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else{
			angular.element(adidasProduct).removeClass("hide");
			angular.element(filaProduct).removeClass("hide");
			angular.element(lottoProduct).removeClass("hide");
		}
	}
	$scope.lowPriceFilter = function(){
		if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 7000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000 || adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 || adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;				
				if((adivalue.currPrice > 1999 && adivalue.currPrice < 3000) || adivalue.currPrice > 4999){										
					document.getElementById(adival).className = "product show";
				}
				else{					
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || (adivalue.currPrice > 2999 && adivalue.currPrice < 5000)){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg1Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.lowerPrice) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else{
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				document.getElementById(adival).className = "product show";
			});
		}
	}	
	$scope.avg1Pricefilter = function(){
		if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 7000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg1Price) && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 && adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000 || adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg1Price) && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || (adivalue.currPrice > 2999 && adivalue.currPrice < 5000)){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg1Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;				
				if( adivalue.currPrice < 2000 || adivalue.currPrice > 4999){										
					document.getElementById(adival).className = "product show";
				}
				else{					
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.avg1Price) && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if((adivalue.currPrice > 1999 && adivalue.currPrice < 3000) || adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg1Price)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.avg1Price) && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.avg1Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else{
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				document.getElementById(adival).className = "product show";
			});
		}
	}
	$scope.avg2Pricefilter = function(){
		if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 7000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && !($scope.avg2Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000 && adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && !($scope.avg2Price)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg2Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;				
				if( adivalue.currPrice < 2000 || adivalue.currPrice > 4999){										
					document.getElementById(adival).className = "product show";
				}
				else{					
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && !($scope.avg2Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if((adivalue.currPrice > 1999 && adivalue.currPrice < 3000) || adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || (adivalue.currPrice > 2999 && adivalue.currPrice < 5000)){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if( adivalue.currPrice > 2999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.avg2Price)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && !($scope.avg2Price)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if(!($scope.avg2Price) && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg2Price){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else{
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				document.getElementById(adival).className = "product show";
			});
		}
	}
	$scope.highPricefilter = function(){
		if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 7000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.avg2Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if( adivalue.currPrice < 3000 || adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 2999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg1Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.avg2Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;				
				if( adivalue.currPrice < 2000 || (adivalue.currPrice > 2999 && adivalue.currPrice < 5000)){										
					document.getElementById(adival).className = "product show";
				}
				else{					
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.avg2Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 5000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000 || adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if((adivalue.currPrice > 1999 && adivalue.currPrice < 3000) || adivalue.currPrice > 4999){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg2Price && $scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if( adivalue.currPrice > 2999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.lowerPrice && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice < 2000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg1Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 1999 && adivalue.currPrice < 3000){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.avg2Price && !($scope.highPrice)){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 2999 && adivalue.currPrice < 5000 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else if($scope.highPrice){
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				if(adivalue.currPrice > 4999 ){					
					document.getElementById(adival).className = "product show";
				}
				else{
					document.getElementById(adival).className = "product hide";
				}
			});
		}
		else{
			var adivalues = $scope.allProduct;	
			angular.forEach(adivalues, function(adivalue) {
				var adival = adivalue.id;
				document.getElementById(adival).className = "product show";
			});
		}
	}
});

