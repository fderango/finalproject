
var myStore = angular.module('coffeeStore', ['ngRoute']);


myStore.controller('contactController', ['$scope', '$http', function ($scope, $http) {
    //$scope.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    var chicago = {lat: 41.8933416, lng: -87.6351103};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: chicago, zoom: 16 });
    var marker = new google.maps.Marker({
          position: chicago,
          map: map
        });
}]);


myStore.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  //$locationProvider.html5Mode(true);

 $routeProvider
    .when("/", {
        templateUrl : "static/templates/main.html"
    })
    .when("/about", {
        templateUrl : "static/templates/about.html"
    })
    .when("/contact", {
        templateUrl : "static/templates/contact.html",
        controller : "contactController"
    })
    .when("/locations", {
        templateUrl : "static/templates/locations.html"
    })
    .when("/menu", {
        templateUrl : "static/templates/menu.html"
    })
    .when("/shop", {
        templateUrl : "static/templates/shop.html"
    });
}]); 

var coffee = [
		{
			name: 'Chai Tea Latte',
			size: 'small',
			price: '2.89',
			description: 'This is a nice Classic Tea Latte',
			image: '/static/images/chailatte.jpg',
			
		},
		{
			name: 'Expresso',
			size: 'medium',
			price: '3.19',
			description: 'Imported from the highest quality of beans',
			image: '/static/images/expresso.jpg'
		},
		{
			name: 'Iced Mocca',
			size: ' large',
			price: '3.39',
			description: "These mocca's are out of this world",
			image: '/static/images/mocca.jpg'
		}
	];


	myStore.controller('myStoreController', function() {
		this.products = coffee;
    
    myStore.addCart = function(product){
    	this.products = coffee;
        }
		
	});