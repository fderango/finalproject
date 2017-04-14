var myStore = angular.module('coffeeStore', ['ngRoute']);
myStore.controller('contactController', ['$scope', '$http', function ($scope, $http) {
    //$scope.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    var chicago = {
        lat: 41.8933416
        , lng: -87.6351103
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: chicago
        , zoom: 16
    });
    var marker = new google.maps.Marker({
        position: chicago
        , map: map
    });
}]);
myStore.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "static/templates/main.html"
    }).when("/about", {
        templateUrl: "static/templates/about.html"
    }).when("/contact", {
        templateUrl: "static/templates/contact.html"
        , controller: "contactController"
    }).when("/locations", {
        templateUrl: "static/templates/locations.html"
    }).when("/menu", {
        templateUrl: "static/templates/menu.html"
    }).when("/shop", {
        templateUrl: "static/templates/shop.html"
    });
}]);

myStore.controller('myStoreController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/products').then(function(result){
        $scope.products = result.data;
    })

    $scope.add = function(productId){
        $http.get('add/' + productId).then(function(result){
          if(result.status == 200){
              window.location = "/cart"
          }
        })
    }
}]);
