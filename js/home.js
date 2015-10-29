/* Home JS*/

var app = angular.module("homeApp",[]);

app.directive("adidasShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in adiRecords | filter : searchBox' ng-click='adiDetails(adiRecord.id)'>" +
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
app.directive("adidasDetails", function(){
	return{
		restrict : "E",
		template : "<div id='{{adiProRecord.productId}}' class='hide' ng-repeat ='adiProRecord in adiRecords'>" +
				"<div class='siteNav'>Home > Footwear > Men's Footwear > sport shoes > Adidas > <span class='active'>Adidas {{adiProRecord.shoesType}} shoes <span></div>" +
					"<article class='leftColPro'>" +
						"<div><img src='{{adiProRecord.src}}' width='300' height = '450' /></div>" +
					"</article>" +
					"<article class='rightColPro'>" +
						"<h1 class='catagoryTitlePro bb-s pb-m'>Adidas {{adiProRecord.shoesType}} shoes</h1>" +
						"<div class='clearfix pt-s pb-s bb-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>{{adiProRecord.ratings}} Reviews</span>" +
						"</div>" +
						"<div class='clearfix pt-s pb-m bb-s'>" +
							"<div class='pull-left'>" +
								"<div class='txt-light txt-15'>Select Color</div>" +
								"<div><input type='radio' name='{{adiProRecord.colorName}}' checked/><span class='pl-s pr-s'>White</span><input type='radio' name='{{adiProRecord.colorName}}' /><span class='pl-s pr-s'>Black</span></div>" +
							"</div>" +
							"<div class='pull-right'>" +
								"<div class='txt-light txt-15'>Select Size</div>" +
								"<div><input type='radio' name='{{adiProRecord.SizeName}}' checked/><span class='pl-s pr-s'>6</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>7</span> <input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>8</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>9</span></div>" +
							"</div>" +
						"</div>" +
						"<div class='pt-s txt-15 txt-light'>last Price: <span class='linrThrought'>Rs {{adiProRecord.prevPrice}}</span></div>" +
						"<div class='pt-s'>" +
							"<span class='txt-22'>Rs {{adiProRecord.currPrice}}</span> <span class='pl-s success'>20% Off</span>" +
						"</div>" +
						"<div class='txt-12'>Selling Price</div>" +
						"<div class='pt-m txt-13'>(Free delivery)</div>" +
						"<div class='pt-m w-300px'>" +
							"<button type='button' class='btn btn-warning btn-block btn-lg'>ADD TO CART</button>" +
							"<button type='button' class='btn btn-success btn-block btn-lg'>BUY NOW</button>" +
							"<a type='button' class='btn btn-primary btn-sm mt-m' href='home.html'>BACK TO PRODUCTS</a>" +
						"</div>" +
					"</article>" +
			"</div>"		
	}
});
app.directive("filaShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in filaRecords' ng-click='filaDetails(adiRecord.id)'>" +
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
app.directive("filaDetails", function(){
	return{
		restrict : "E",
		template : "<div id='{{adiProRecord.productId}}' class='hide' ng-repeat ='adiProRecord in filaRecords'>" +
				"<div class='siteNav'>Home > Footwear > Men's Footwear > sport shoes > Fila > <span class='active'>Fila {{adiProRecord.shoesType}} shoes <span></div>" +
					"<article class='leftColPro'>" +
						"<div><img src='{{adiProRecord.src}}' width='300' height = '450' /></div>" +
					"</article>" +
					"<article class='rightColPro'>" +
						"<h1 class='catagoryTitlePro bb-s pb-m'>Fila {{adiProRecord.shoesType}} shoes</h1>" +
						"<div class='clearfix pt-s pb-s bb-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>{{adiProRecord.ratings}} Reviews</span>" +
						"</div>" +
						"<div class='clearfix pt-s pb-m bb-s'>" +
							"<div class='pull-left'>" +
								"<div class='txt-light txt-15'>Select Color</div>" +
								"<div><input type='radio' name='{{adiProRecord.colorName}}' checked/><span class='pl-s pr-s'>White</span><input type='radio' name='{{adiProRecord.colorName}}' /><span class='pl-s pr-s'>Black</span></div>" +
							"</div>" +
							"<div class='pull-right'>" +
								"<div class='txt-light txt-15'>Select Size</div>" +
								"<div><input type='radio' name='{{adiProRecord.SizeName}}' checked/><span class='pl-s pr-s'>6</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>7</span> <input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>8</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>9</span></div>" +
							"</div>" +
						"</div>" +
						"<div class='pt-s txt-15 txt-light'>last Price: <span class='linrThrought'>Rs {{adiProRecord.prevPrice}}</span></div>" +
						"<div class='pt-s'>" +
							"<span class='txt-22'>Rs {{adiProRecord.currPrice}}</span> <span class='pl-s success'>20% Off</span>" +
						"</div>" +
						"<div class='txt-12'>Selling Price</div>" +
						"<div class='pt-m txt-13'>(Free delivery)</div>" +
						"<div class='pt-m w-300px'>" +
							"<button type='button' class='btn btn-warning btn-block btn-lg'>ADD TO CART</button>" +
							"<button type='button' class='btn btn-success btn-block btn-lg'>BUY NOW</button>" +
							"<a type='button' class='btn btn-primary btn-sm mt-m' href='home.html'>BACK TO PRODUCTS</a>" +
						"</div>" +
					"</article>" +
			"</div>"		
	}
});
app.directive("lottoShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in lottoRecords' ng-click='lottoDetails(adiRecord.id)'>" +
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
app.directive("lottoDetails", function(){
	return{
		restrict : "E",
		template : "<div id='{{adiProRecord.productId}}' class='hide' ng-repeat ='adiProRecord in lottoRecords'>" +
				"<div class='siteNav'>Home > Footwear > Men's Footwear > sport shoes > Lotto > <span class='active'>Lotto {{adiProRecord.shoesType}} shoes <span></div>" +
					"<article class='leftColPro'>" +
						"<div><img src='{{adiProRecord.src}}' width='300' height = '450' /></div>" +
					"</article>" +
					"<article class='rightColPro'>" +
						"<h1 class='catagoryTitlePro bb-s pb-m'>Lotto {{adiProRecord.shoesType}} shoes</h1>" +
						"<div class='clearfix pt-s pb-s bb-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>{{adiProRecord.ratings}} Reviews</span>" +
						"</div>" +
						"<div class='clearfix pt-s pb-m bb-s'>" +
							"<div class='pull-left'>" +
								"<div class='txt-light txt-15'>Select Color</div>" +
								"<div><input type='radio' name='{{adiProRecord.colorName}}' checked/><span class='pl-s pr-s'>White</span><input type='radio' name='{{adiProRecord.colorName}}' /><span class='pl-s pr-s'>Black</span></div>" +
							"</div>" +
							"<div class='pull-right'>" +
								"<div class='txt-light txt-15'>Select Size</div>" +
								"<div><input type='radio' name='{{adiProRecord.SizeName}}' checked/><span class='pl-s pr-s'>6</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>7</span> <input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>8</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>9</span></div>" +
							"</div>" +
						"</div>" +
						"<div class='pt-s txt-15 txt-light'>last Price: <span class='linrThrought'>Rs {{adiProRecord.prevPrice}}</span></div>" +
						"<div class='pt-s'>" +
							"<span class='txt-22'>Rs {{adiProRecord.currPrice}}</span> <span class='pl-s success'>20% Off</span>" +
						"</div>" +
						"<div class='txt-12'>Selling Price</div>" +
						"<div class='pt-m txt-13'>(Free delivery)</div>" +
						"<div class='pt-m w-300px'>" +
							"<button type='button' class='btn btn-warning btn-block btn-lg'>ADD TO CART</button>" +
							"<button type='button' class='btn btn-success btn-block btn-lg'>BUY NOW</button>" +
							"<a type='button' class='btn btn-primary btn-sm mt-m' href='home.html'>BACK TO PRODUCTS</a>" +
						"</div>" +
					"</article>" +
			"</div>"		
	}
});
app.directive("nikeShoes", function(){
	return{
		restrict : "E",
		template : "<div class='product' id='{{adiRecord.id}}' ng-repeat ='adiRecord in nikeRecords' ng-click='nikeDetails(adiRecord.id)'>" +
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
app.directive("nikeDetails", function(){
	return{
		restrict : "E",
		template : "<div id='{{adiProRecord.productId}}' class='hide' ng-repeat ='adiProRecord in nikeRecords'>" +
				"<div class='siteNav'>Home > Footwear > Men's Footwear > sport shoes > Nike > <span class='active'>Nike {{adiProRecord.shoesType}} shoes <span></div>" +
					"<article class='leftColPro'>" +
						"<div><img src='{{adiProRecord.src}}' width='300' height = '450' /></div>" +
					"</article>" +
					"<article class='rightColPro'>" +
						"<h1 class='catagoryTitlePro bb-s pb-m'>Nike {{adiProRecord.shoesType}} shoes</h1>" +
						"<div class='clearfix pt-s pb-s bb-s'>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='glyphicon glyphicon-star-empty'></span>" +
								"<span class='pl-s'>{{adiProRecord.ratings}} Reviews</span>" +
						"</div>" +
						"<div class='clearfix pt-s pb-m bb-s'>" +
							"<div class='pull-left'>" +
								"<div class='txt-light txt-15'>Select Color</div>" +
								"<div><input type='radio' name='{{adiProRecord.colorName}}' checked/><span class='pl-s pr-s'>White</span><input type='radio' name='{{adiProRecord.colorName}}' /><span class='pl-s pr-s'>Black</span></div>" +
							"</div>" +
							"<div class='pull-right'>" +
								"<div class='txt-light txt-15'>Select Size</div>" +
								"<div><input type='radio' name='{{adiProRecord.SizeName}}' checked/><span class='pl-s pr-s'>6</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>7</span> <input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>8</span><input type='radio' name='{{adiProRecord.SizeName}}' /><span class='pl-s pr-s'>9</span></div>" +
							"</div>" +
						"</div>" +
						"<div class='pt-s txt-15 txt-light'>last Price: <span class='linrThrought'>Rs {{adiProRecord.prevPrice}}</span></div>" +
						"<div class='pt-s'>" +
							"<span class='txt-22'>Rs {{adiProRecord.currPrice}}</span> <span class='pl-s success'>20% Off</span>" +
						"</div>" +
						"<div class='txt-12'>Selling Price</div>" +
						"<div class='pt-m txt-13'>(Free delivery)</div>" +
						"<div class='pt-m w-300px'>" +
							"<button type='button' class='btn btn-warning btn-block btn-lg'>ADD TO CART</button>" +
							"<button type='button' class='btn btn-success btn-block btn-lg'>BUY NOW</button>" +
							"<a type='button' class='btn btn-primary btn-sm mt-m' href='home.html'>BACK TO PRODUCTS</a>" +
						"</div>" +
					"</article>" +
			"</div>"		
	}
});
app.controller("brandController", function($scope){

	$scope.adiRecords = [
	{
		"id" : "Adi1",
		"productId" : "AdiPro1",
		"colorName" : "Adi1Col",
		"SizeName" : "Adi1Size",
		"src" : "img/Adidas/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3999",
		"prevPrice" : "9999",
		"discount" : "80%"
	},
	{
		"id" : "Adi2",
		"productId" : "AdiPro2",
		"colorName" : "Adi2Col",
		"SizeName" : "Adi2Size",
		"src" : "img/Adidas/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2999",
		"prevPrice" : "6999",
		"discount" : "50%"
	},
	{
		"id" : "Adi3",
		"productId" : "AdiPro3",
		"colorName" : "Adi3Col",
		"SizeName" : "Adi3Size",
		"src" : "img/Adidas/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1999",
		"prevPrice" : "5999",
		"discount" : "60%"
	},
	{
		"id" : "Adi4",
		"productId" : "AdiPro4",
		"colorName" : "Adi4Col",
		"SizeName" : "Adi4Size",
		"src" : "img/Adidas/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1599",
		"prevPrice" : "2099",
		"discount" : "25%"
	},
	{
		"id" : "Adi5",
		"productId" : "AdiPro5",
		"colorName" : "Adi5Col",
		"SizeName" : "Adi5Size",
		"src" : "img/Adidas/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6999",
		"prevPrice" : "9999",
		"discount" : "40%"
	},
	{
		"id" : "Adi6",
		"productId" : "AdiPro6",
		"colorName" : "Adi6Col",
		"SizeName" : "Adi6Size",
		"src" : "img/Adidas/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7999",
		"prevPrice" : "9999",
		"discount" : "30%"
	},
	{
		"id" : "Adi7",
		"productId" : "AdiPro7",
		"colorName" : "Adi7Col",
		"SizeName" : "Adi7Size",
		"src" : "img/Adidas/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1099",
		"prevPrice" : "2999",
		"discount" : "70%"
	},
	{
		"id" : "Adi8",
		"productId" : "AdiPro8",
		"colorName" : "Adi8Col",
		"SizeName" : "Adi8Size",
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
		"productId" : "filaPro1",
		"colorName" : "fila1Col",
		"SizeName" : "fila1Size",
		"src" : "img/fila/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "fila2",
		"productId" : "filaPro2",
		"colorName" : "fila2Col",
		"SizeName" : "fila2Size",
		"src" : "img/fila/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "fila3",
		"productId" : "filaPro3",
		"colorName" : "fila3Col",
		"SizeName" : "fila3Size",
		"src" : "img/fila/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "fila4",
		"productId" : "filaPro4",
		"colorName" : "fila4Col",
		"SizeName" : "fila4Size",
		"src" : "img/fila/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "fila5",
		"productId" : "filaPro5",
		"colorName" : "fila5Col",
		"SizeName" : "fila5Size",
		"src" : "img/fila/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "fila6",
		"productId" : "filaPro6",
		"colorName" : "fila6Col",
		"SizeName" : "fila6Size",
		"src" : "img/fila/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "fila7",
		"productId" : "filaPro7",
		"colorName" : "fila7Col",
		"SizeName" : "fila7Size",
		"src" : "img/fila/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "fila8",
		"productId" : "filaPro8",
		"colorName" : "fila8Col",
		"SizeName" : "fila8Size",
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
		"productId" : "lottoPro1",
		"colorName" : "lotto1Col",
		"SizeName" : "lotto1Size",
		"src" : "img/lotto/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "lotto2",
		"productId" : "lottoPro2",
		"colorName" : "lotto2Col",
		"SizeName" : "lotto2Size",
		"src" : "img/lotto/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "lotto3",
		"productId" : "lottoPro3",
		"colorName" : "lotto3Col",
		"SizeName" : "lotto3Size",
		"src" : "img/lotto/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "lotto4",
		"productId" : "lottoPro4",
		"colorName" : "lotto4Col",
		"SizeName" : "lotto4Size",
		"src" : "img/lotto/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "lotto5",
		"productId" : "lottoPro5",
		"colorName" : "lotto5Col",
		"SizeName" : "lotto5Size",
		"src" : "img/lotto/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "lotto6",
		"productId" : "lottoPro6",
		"colorName" : "lotto6Col",
		"SizeName" : "lotto6Size",
		"src" : "img/lotto/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "lotto7",
		"productId" : "lottoPro7",
		"colorName" : "lotto7Col",
		"SizeName" : "lotto7Size",
		"src" : "img/lotto/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "lotto8",
		"productId" : "lottoPro8",
		"colorName" : "lotto8Col",
		"SizeName" : "lotto8Size",
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
		"productId" : "nikePro1",
		"colorName" : "nike1Col",
		"SizeName" : "nike1Size",
		"src" : "img/nike/shoes.jpeg",
		"shoesType" : "Running",
		"ratings" : "154",
		"currPrice" : "3,999",
		"prevPrice" : "9,999",
		"discount" : "80%"
	},
	{
		"id" : "nike2",
		"productId" : "nikePro2",
		"colorName" : "nike2Col",
		"SizeName" : "nike2Size",
		"src" : "img/nike/shoes1.jpeg",
		"shoesType" : "casual",
		"ratings" : "100",
		"currPrice" : "2,999",
		"prevPrice" : "6,999",
		"discount" : "50%"
	},
	{
		"id" : "nike3",
		"productId" : "nikePro3",
		"colorName" : "nike3Col",
		"SizeName" : "nike3Size",
		"src" : "img/nike/shoes2.jpeg",
		"shoesType" : "Running",
		"ratings" : "244",
		"currPrice" : "1,999",
		"prevPrice" : "5,999",
		"discount" : "60%"
	},
	{
		"id" : "nike4",
		"productId" : "nikePro4",
		"colorName" : "nike4Col",
		"SizeName" : "nike4Size",
		"src" : "img/nike/shoes3.jpeg",
		"shoesType" : "sport",
		"ratings" : "201",
		"currPrice" : "1,599",
		"prevPrice" : "2,099",
		"discount" : "25%"
	},
	{
		"id" : "nike5",
		"productId" : "nikePro5",
		"colorName" : "nike5Col",
		"SizeName" : "nike5Size",
		"src" : "img/nike/shoes4.jpeg",
		"shoesType" : "spring",
		"ratings" : "350",
		"currPrice" : "6,999",
		"prevPrice" : "9,999",
		"discount" : "40%"
	},
	{
		"id" : "nike6",
		"productId" : "nikePro6",
		"colorName" : "nike6Col",
		"SizeName" : "nike6Size",
		"src" : "img/nike/shoes5.jpeg",
		"shoesType" : "football",
		"ratings" : "304",
		"currPrice" : "7,999",
		"prevPrice" : "9,999",
		"discount" : "30%"
	},
	{
		"id" : "nike7",
		"productId" : "nikePro7",
		"colorName" : "nike7Col",
		"SizeName" : "nike7Size",
		"src" : "img/nike/shoes6.jpeg",
		"shoesType" : "cricket",
		"ratings" : "54",
		"currPrice" : "1,099",
		"prevPrice" : "2,999",
		"discount" : "70%"
	},
	{
		"id" : "nike8",
		"productId" : "nikePro8",
		"colorName" : "nike8Col",
		"SizeName" : "nike8Size",
		"src" : "img/nike/shoes7.jpeg",
		"shoesType" : "running",
		"ratings" : "54",
		"currPrice" : "5,099",
		"prevPrice" : "11,999",
		"discount" : "60%"
	}
	];
	
	$scope.allProduct = [
	{"id" : "Adi1","currPrice" : "3999"},
	{"id" : "Adi2","currPrice" : "2999"},
	{"id" : "Adi3","currPrice" : "1999"},
	{"id" : "Adi4","currPrice" : "1599"},
	{"id" : "Adi5","currPrice" : "6999"},
	{"id" : "Adi6","currPrice" : "7999"},
	{"id" : "Adi7","currPrice" : "1099"},
	{"id" : "Adi8","currPrice" : "5099"},
	{"id" : "fila1","currPrice" : "3999"},
	{"id" : "fila2","currPrice" : "2999"},
	{"id" : "fila3","currPrice" : "1999"},
	{"id" : "fila4","currPrice" : "1599"},
	{"id" : "fila5","currPrice" : "6999"},
	{"id" : "fila6","currPrice" : "7999"},
	{"id" : "fila7","currPrice" : "1099"},
	{"id" : "fila8","currPrice" : "5099"},
	{"id" : "lotto1","currPrice" : "3999"},
	{"id" : "lotto2","currPrice" : "2999"},
	{"id" : "lotto3","currPrice" : "1999"},
	{"id" : "lotto4","currPrice" : "1599"},
	{"id" : "lotto5","currPrice" : "6999"},
	{"id" : "lotto6","currPrice" : "7999"},
	{"id" : "lotto7","currPrice" : "1099"},
	{"id" : "lotto8","currPrice" : "5099"},
	{"id" : "nike1","currPrice" : "3999"},
	{"id" : "nike2","currPrice" : "2999"},
	{"id" : "nike3","currPrice" : "1999"},
	{"id" : "nike4","currPrice" : "1599"},
	{"id" : "nike5","currPrice" : "6999"},
	{"id" : "nike6","currPrice" : "7999"},
	{"id" : "nike7","currPrice" : "1099"},
	{"id" : "nike8","currPrice" : "5099"}
	];
	$scope.adiDetails = function(adiid){
		if(adiid == "Adi1"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro1").className = "show";
		}
		else if(adiid == "Adi2"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro2").className = "show";
		}
		else if(adiid == "Adi3"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro3").className = "show";
		}
		else if(adiid == "Adi4"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro4").className = "show";
		}
		else if(adiid == "Adi5"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro5").className = "show";
		}
		else if(adiid == "Adi6"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro6").className = "show";
		}
		else if(adiid == "Adi7"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro7").className = "show";
		}
		else {
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("AdiPro8").className = "show";
		}
	}
	$scope.filaDetails = function(adiid){
		if(adiid == "fila1"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro1").className = "show";
		}
		else if(adiid == "fila2"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro2").className = "show";
		}
		else if(adiid == "fila3"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro3").className = "show";
		}
		else if(adiid == "fila4"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro4").className = "show";
		}
		else if(adiid == "fila5"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro5").className = "show";
		}
		else if(adiid == "fila6"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro6").className = "show";
		}
		else if(adiid == "fila7"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro7").className = "show";
		}
		else {
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("filaPro8").className = "show";
		}
	}
	$scope.lottoDetails = function(adiid){
		if(adiid == "lotto1"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro1").className = "show";
		}
		else if(adiid == "lotto2"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro2").className = "show";
		}
		else if(adiid == "lotto3"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro3").className = "show";
		}
		else if(adiid == "lotto4"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro4").className = "show";
		}
		else if(adiid == "lotto5"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro5").className = "show";
		}
		else if(adiid == "lotto6"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro6").className = "show";
		}
		else if(adiid == "lotto7"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro7").className = "show";
		}
		else {
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("lottoPro8").className = "show";
		}
	}
	$scope.nikeDetails = function(adiid){
		if(adiid == "nike1"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro1").className = "show";
		}
		else if(adiid == "nike2"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro2").className = "show";
		}
		else if(adiid == "nike3"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro3").className = "show";
		}
		else if(adiid == "nike4"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro4").className = "show";
		}
		else if(adiid == "nike5"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro5").className = "show";
		}
		else if(adiid == "nike6"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro6").className = "show";
		}
		else if(adiid == "nike7"){
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro7").className = "show";
		}
		else {
		document.getElementById("jqProducts").className = "hide";
		document.getElementById("nikePro8").className = "show";
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
		$scope.searchBox = "";
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
		$scope.searchBox = "";
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
		$scope.searchBox = "";
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
		$scope.searchBox = "";
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
	
	angular.element(jqSearch).bind("blur",function(){
		if($scope.searchBox == "adidas"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			angular.element(jqProductes).removeClass("hide").addClass("show");
			angular.element(adidasProduct).removeClass("hide").addClass("show");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.searchBox == "fila"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			angular.element(jqProductes).removeClass("hide").addClass("show");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("hide").addClass("show");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		} 
		else if($scope.searchBox == "lotto"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			angular.element(jqProductes).removeClass("hide").addClass("show");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("hide").addClass("show");
			angular.element(nikeProduct).removeClass("show").addClass("hide");
		}
		else if($scope.searchBox == "nike"){
			$scope.adidasFilter = false; $scope.filafilterModel = false; $scope.lottofilterModel = false; $scope.nikefilterModel = false;
			angular.element(jqNoMatch).removeClass("show").addClass("hide");
			angular.element(jqProductes).removeClass("hide").addClass("show");
			angular.element(adidasProduct).removeClass("show").addClass("hide");
			angular.element(filaProduct).removeClass("show").addClass("hide");
			angular.element(lottoProduct).removeClass("show").addClass("hide");
			angular.element(nikeProduct).removeClass("hide").addClass("show");
		}
		else{
			document.getElementById("jqProductes").className = "hide pt-40";
			document.getElementById("jqNoMatch").className = "show pt-m align-c";
		}
	});
});

