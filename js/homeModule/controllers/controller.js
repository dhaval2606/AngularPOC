/* Home Controller */ 

app.controller("brandController", function($scope) {
	$scope.searchBox = "";
	$scope.downarr = true;
	$scope.prodshow = true;
	$scope.pricedownarr = true;
	$scope.priceshow = true;
	$scope.uparr = false;
	$scope.priceuparr = false;
	$scope.AdiClass = true;
	$scope.FilaClass = true;
	$scope.LottoClass = true;
	$scope.NikeClass = true;
	$scope.prodMethod = function(){
		$scope.AdiClass = false;
		$scope.FilaClass = false;
		$scope.LottoClass = false;
		$scope.NikeClass = false;
		if($scope.adidasFilter == true) {
			$scope.AdiClass = true;
		}
		if($scope.filafilterModel == true) {
			$scope.FilaClass = true;
		}
		if($scope.lottofilterModel == true) {
			$scope.LottoClass = true;
		}
		if($scope.nikefilterModel == true) {
			$scope.NikeClass = true;
		}
		if(!($scope.adidasFilter == true) && !($scope.filafilterModel == true) && !($scope.lottofilterModel == true) && !($scope.nikefilterModel == true)) {
			$scope.AdiClass = true;
			$scope.FilaClass = true;
			$scope.LottoClass = true;
			$scope.NikeClass = true;
		}
	}
	$scope.priceFilterMethod = function(){
		var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				document.getElementById(Prodval).className = "product hide";				
			});
		if($scope.lowerPrice) {
			var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				if(searchvalue.currPrice < 2000){					
					document.getElementById(Prodval).className = "product show";
				}
				
			});
		}
		if($scope.avg1Price) {
			var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				if(searchvalue.currPrice > 1999 && searchvalue.currPrice < 3000){					
					document.getElementById(Prodval).className = "product show";
				}
				
			});
		}
		if($scope.avg2Price) {
			var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				if(searchvalue.currPrice > 2999 && searchvalue.currPrice < 5000){					
					document.getElementById(Prodval).className = "product show";
				}
				
			});
		}
		if($scope.highPrice) {
			var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				if(searchvalue.currPrice > 4999){					
					document.getElementById(Prodval).className = "product show";
				}
				
			});
		}
		if(!($scope.lowerPrice) && !($scope.avg1Price) && !($scope.avg2Price) && !($scope.highPrice)) {
			var prodvalues = $scope.productRecords;	
			angular.forEach(prodvalues, function(searchvalue) {
				var Prodval = searchvalue.id;
				document.getElementById(Prodval).className = "product show";
			});
		}
	}
	$scope.productRecords = [
	{
		"id" : "Adi1",
		"productId" : "AdiPro1",
		"ProClass" : "AdiClass",
		"colorName" : "Adi1Col",
		"SizeName" : "Adi1Size",
		"src" : "img/Adidas/shoes.jpeg",
		"shoesType" : "Adidas Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "Adi2",
		"productId" : "AdiPro2",
		"ProClass" : "AdiClass",
		"colorName" : "Adi2Col",
		"SizeName" : "Adi2Size",
		"src" : "img/Adidas/shoes1.jpeg",
		"shoesType" : "Adidas casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "Adi3",
		"productId" : "AdiPro3",
		"ProClass" : "AdiClass",
		"colorName" : "Adi3Col",
		"SizeName" : "Adi3Size",
		"src" : "img/Adidas/shoes2.jpeg",
		"shoesType" : "Adidas Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "Adi4",
		"productId" : "AdiPro4",
		"ProClass" : "AdiClass",
		"colorName" : "Adi4Col",
		"SizeName" : "Adi4Size",
		"src" : "img/Adidas/shoes3.jpeg",
		"shoesType" : "Adidas sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "Adi5",
		"productId" : "AdiPro5",
		"ProClass" : "AdiClass",
		"colorName" : "Adi5Col",
		"SizeName" : "Adi5Size",
		"src" : "img/Adidas/shoes4.jpeg",
		"shoesType" : "Adidas spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "Adi6",
		"productId" : "AdiPro6",
		"ProClass" : "AdiClass",
		"colorName" : "Adi6Col",
		"SizeName" : "Adi6Size",
		"src" : "img/Adidas/shoes5.jpeg",
		"shoesType" : "Adidas football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "Adi7",
		"productId" : "AdiPro7",
		"ProClass" : "AdiClass",
		"colorName" : "Adi7Col",
		"SizeName" : "Adi7Size",
		"src" : "img/Adidas/shoes6.jpeg",
		"shoesType" : "Adidas cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "Adi8",
		"productId" : "AdiPro8",
		"ProClass" : "AdiClass",
		"colorName" : "Adi8Col",
		"SizeName" : "Adi8Size",
		"src" : "img/Adidas/shoes7.jpeg",
		"shoesType" : "Adidas Running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11999",
		"discount" : "60%"
	},
	{
		"id" : "fila1",
		"productId" : "filaPro1",
		"ProClass" : "FilaClass",
		"colorName" : "fila1Col",
		"SizeName" : "fila1Size",
		"src" : "img/fila/shoes.jpeg",
		"shoesType" : "Fila Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "fila2",
		"productId" : "filaPro2",
		"ProClass" : "FilaClass",
		"colorName" : "fila2Col",
		"SizeName" : "fila2Size",
		"src" : "img/fila/shoes1.jpeg",
		"shoesType" : "Fila casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "fila3",
		"productId" : "filaPro3",
		"ProClass" : "FilaClass",
		"colorName" : "fila3Col",
		"SizeName" : "fila3Size",
		"src" : "img/fila/shoes2.jpeg",
		"shoesType" : "Fila Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "fila4",
		"productId" : "filaPro4",
		"ProClass" : "FilaClass",
		"colorName" : "fila4Col",
		"SizeName" : "fila4Size",
		"src" : "img/fila/shoes3.jpeg",
		"shoesType" : "Fila sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "fila5",
		"productId" : "filaPro5",
		"ProClass" : "FilaClass",
		"colorName" : "fila5Col",
		"SizeName" : "fila5Size",
		"src" : "img/fila/shoes4.jpeg",
		"shoesType" : "Fila spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "fila6",
		"productId" : "filaPro6",
		"ProClass" : "FilaClass",
		"colorName" : "fila6Col",
		"SizeName" : "fila6Size",
		"src" : "img/fila/shoes5.jpeg",
		"shoesType" : "Fila football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "fila7",
		"productId" : "filaPro7",
		"ProClass" : "FilaClass",
		"colorName" : "fila7Col",
		"SizeName" : "fila7Size",
		"src" : "img/fila/shoes6.jpeg",
		"shoesType" : "Fila cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "fila8",
		"productId" : "filaPro8",
		"ProClass" : "FilaClass",
		"colorName" : "fila8Col",
		"SizeName" : "fila8Size",
		"src" : "img/fila/shoes7.jpeg",
		"shoesType" : "Fila running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	},
	{
		"id" : "lotto1",
		"productId" : "lottoPro1",
		"ProClass" : "LottoClass",
		"colorName" : "lotto1Col",
		"SizeName" : "lotto1Size",
		"src" : "img/lotto/shoes.jpeg",
		"shoesType" : "Lotto Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "lotto2",
		"productId" : "lottoPro2",
		"ProClass" : "LottoClass",
		"colorName" : "lotto2Col",
		"SizeName" : "lotto2Size",
		"src" : "img/lotto/shoes1.jpeg",
		"shoesType" : "Lotto casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "lotto3",
		"productId" : "lottoPro3",
		"ProClass" : "LottoClass",
		"colorName" : "lotto3Col",
		"SizeName" : "lotto3Size",
		"src" : "img/lotto/shoes2.jpeg",
		"shoesType" : "Lotto Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "lotto4",
		"productId" : "lottoPro4",
		"ProClass" : "LottoClass",
		"colorName" : "lotto4Col",
		"SizeName" : "lotto4Size",
		"src" : "img/lotto/shoes3.jpeg",
		"shoesType" : "Lotto sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "lotto5",
		"productId" : "lottoPro5",
		"ProClass" : "LottoClass",
		"colorName" : "lotto5Col",
		"SizeName" : "lotto5Size",
		"src" : "img/lotto/shoes4.jpeg",
		"shoesType" : "Lotto spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "lotto6",
		"productId" : "lottoPro6",
		"ProClass" : "LottoClass",
		"colorName" : "lotto6Col",
		"SizeName" : "lotto6Size",
		"src" : "img/lotto/shoes5.jpeg",
		"shoesType" : "Lotto football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "lotto7",
		"productId" : "lottoPro7",
		"ProClass" : "LottoClass",
		"colorName" : "lotto7Col",
		"SizeName" : "lotto7Size",
		"src" : "img/lotto/shoes6.jpeg",
		"shoesType" : "Lotto cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "lotto8",
		"productId" : "lottoPro8",
		"ProClass" : "LottoClass",
		"colorName" : "lotto8Col",
		"SizeName" : "lotto8Size",
		"src" : "img/lotto/shoes7.jpeg",
		"shoesType" : "Lotto running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	},
	{
		"id" : "nike1",
		"productId" : "nikePro1",
		"ProClass" : "NikeClass",
		"colorName" : "nike1Col",
		"SizeName" : "nike1Size",
		"src" : "img/nike/shoes.jpeg",
		"shoesType" : "Nike Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "nike2",
		"productId" : "nikePro2",
		"ProClass" : "NikeClass",
		"colorName" : "nike2Col",
		"SizeName" : "nike2Size",
		"src" : "img/nike/shoes1.jpeg",
		"shoesType" : "Nike casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "nike3",
		"productId" : "nikePro3",
		"ProClass" : "NikeClass",
		"colorName" : "nike3Col",
		"SizeName" : "nike3Size",
		"src" : "img/nike/shoes2.jpeg",
		"shoesType" : "Nike Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "nike4",
		"productId" : "nikePro4",
		"ProClass" : "NikeClass",
		"colorName" : "nike4Col",
		"SizeName" : "nike4Size",
		"src" : "img/nike/shoes3.jpeg",
		"shoesType" : "Nike sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "nike5",
		"productId" : "nikePro5",
		"ProClass" : "NikeClass",
		"colorName" : "nike5Col",
		"SizeName" : "nike5Size",
		"src" : "img/nike/shoes4.jpeg",
		"shoesType" : "Nike spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "nike6",
		"productId" : "nikePro6",
		"ProClass" : "NikeClass",
		"colorName" : "nike6Col",
		"SizeName" : "nike6Size",
		"src" : "img/nike/shoes5.jpeg",
		"shoesType" : "Nike football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "nike7",
		"productId" : "nikePro7",
		"ProClass" : "NikeClass",
		"colorName" : "nike7Col",
		"SizeName" : "nike7Size",
		"src" : "img/nike/shoes6.jpeg",
		"shoesType" : "Nike cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "nike8",
		"productId" : "nikePro8",
		"ProClass" : "NikeClass",
		"colorName" : "nike8Col",
		"SizeName" : "nike8Size",
		"src" : "img/nike/shoes7.jpeg",
		"shoesType" : "Nike running",
		"ratings" : "54",
		"currPrice" : "5099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	}
	];	
	$scope.hideceta = function() { $scope.downarr = false; $scope.uparr = true; $scope.prodshow = false;}
	$scope.showceta = function() { $scope.downarr = true; $scope.uparr = false; $scope.prodshow = true;}
	$scope.hidecetaPri = function() { $scope.pricedownarr = false; $scope.priceuparr = true; $scope.priceshow = false;}
	$scope.showcetaPri = function() { $scope.pricedownarr = true; $scope.priceuparr = false; $scope.priceshow = true;}
	$scope.checking = function() {
	$scope.$watch('adidasFilter', function() {
		$scope.prodMethod();
	});
	$scope.$watch('filafilterModel', function() {
		$scope.prodMethod();
	});
	$scope.$watch('lottofilterModel', function() {
		$scope.prodMethod();
	});
	$scope.$watch('nikefilterModel', function() {
		$scope.prodMethod();
	});
	}
	$scope.PriceFilter = function() {		
		$scope.$watch('lowerPrice', function() {
			$scope.priceFilterMethod();
		});
		$scope.$watch('avg1Price', function() {
			$scope.priceFilterMethod();
		});
		$scope.$watch('avg2Price', function() {
			$scope.priceFilterMethod();
		});
		$scope.$watch('highPrice', function() {
			$scope.priceFilterMethod();
		})
	}
	$scope.adiDetails = function(adiid) {
		if(adiid == "Adi1") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro1).addClass("show")}
		else if(adiid == "Adi2") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro2).addClass("show")}
		else if(adiid == "Adi3") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro3).addClass("show")}
		else if(adiid == "Adi4") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro4).addClass("show")}
		else if(adiid == "Adi5") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro5).addClass("show")}
		else if(adiid == "Adi6") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro6).addClass("show")}
		else if(adiid == "Adi7") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro7).addClass("show")}
		else if(adiid == "Adi8") { angular.element(jqProducts).addClass("hide"); angular.element(AdiPro8).addClass("show")}
		else if(adiid == "fila1") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro1).addClass("show")}
		else if(adiid == "fila2") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro2).addClass("show")}
		else if(adiid == "fila3") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro3).addClass("show")}
		else if(adiid == "fila4") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro4).addClass("show")}
		else if(adiid == "fila5") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro5).addClass("show")}
		else if(adiid == "fila6") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro6).addClass("show")}
		else if(adiid == "fila7") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro7).addClass("show")}
		else if(adiid == "fila8") { angular.element(jqProducts).addClass("hide"); angular.element(filaPro8).addClass("show")}
		else if(adiid == "lotto1") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro1).addClass("show")}
		else if(adiid == "lotto2") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro2).addClass("show")}
		else if(adiid == "lotto3") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro3).addClass("show")}
		else if(adiid == "lotto4") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro4).addClass("show")}
		else if(adiid == "lotto5") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro5).addClass("show")}
		else if(adiid == "lotto6") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro6).addClass("show")}
		else if(adiid == "lotto7") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro7).addClass("show")}
		else if(adiid == "lotto8") { angular.element(jqProducts).addClass("hide"); angular.element(lottoPro8).addClass("show")}
		else if(adiid == "nike1") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro1).addClass("show")}
		else if(adiid == "nike2") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro2).addClass("show")}
		else if(adiid == "nike3") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro3).addClass("show")}
		else if(adiid == "nike4") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro4).addClass("show")}
		else if(adiid == "nike5") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro5).addClass("show")}
		else if(adiid == "nike6") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro6).addClass("show")}
		else if(adiid == "nike7") { angular.element(jqProducts).addClass("hide"); angular.element(nikePro7).addClass("show")}
		else { angular.element(jqProducts).addClass("hide"); angular.element(nikePro8).addClass("show")}
	}	
});