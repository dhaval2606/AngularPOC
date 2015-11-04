/*Home directive*/

app.directive("allShoes", function() {
	return{
		restrict : "E",		
		templateUrl  : 'productTemp.html'		
	}
});
app.directive("shoesDetails", function() {
	return{
		restrict : "E",
		templateUrl : "productDetails.html"		
	}
});

