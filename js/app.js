
var myStore = angular.module('coffeeStore', ['ngRoute']);


myStore.controller('contactController', ['$scope', '$http', function ($scope, $http) {
    //$scope.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}]);


myStore.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  //$locationProvider.html5Mode(true);

 $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/contact", {
        templateUrl : "contact.html",
        controller : "contactController"
    })
    .when("/locations", {
        templateUrl : "locations.html"
    })
    .when("/menu", {
        templateUrl : "menu.html"
    })
    .when("/shop", {
        templateUrl : "shop.html"
    });
}]); 

var coffee = [
		{
			name: 'Chai Tea Latte',
			size: 'small',
			price: '2.89',
			description: 'This is a nice Classic Tea Latte',
			image: 'images/chailatte.jpg',
			
		},
		{
			name: 'Expresso',
			size: 'medium',
			price: '3.19',
			description: 'Imported from the highest quality of beans',
			image: 'images/expresso.jpg'
		},
		{
			name: 'Iced Mocca',
			size: ' large',
			price: '3.39',
			description: "These mocca's are out of this world",
			image: 'images/mocca.jpg'
		}
	];


	myStore.controller('myStoreController', function() {
		this.products = coffee;
    
    myStore.addCart = function(product){
    	this.products = coffee;
        }
		
	});