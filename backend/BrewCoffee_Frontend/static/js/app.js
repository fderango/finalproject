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

var authorization = 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI4MzY3OGRiNTJkZWRkNDZhYmNhOTg3NjlhNTgxYWVmYWY2MTc3M2I1NTM2YTU3MmI2ZmNlNmNhODg2MGJkN2M1fGNyZWF0ZWRfYXQ9MjAxNy0wNC0xM1QyMDowNzoyNy4wNjgwMjQ5OTErMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=';
var form = document.querySelector('#checkout-form');
var submit = document.querySelector('input[type="submit"]');

braintree.client.create({
  authorization: authorization
}, function (clientErr, clientInstance) {
  if (clientErr) {
    // Handle error in client creation
    return;
  }

  braintree.hostedFields.create({
    client: clientInstance,
    styles: {
      'input': {
        'font-size': '14pt'
      },
      'input.invalid': {
        'color': 'red'
      },
      'input.valid': {
        'color': 'green'
      }
    },
    fields: {
      number: {
        selector: '#card-number',
        placeholder: '4111 1111 1111 1111'
      },
      cvv: {
        selector: '#cvv',
        placeholder: '123'
      },
      expirationDate: {
        selector: '#expiration-date',
        placeholder: '10/2019'
      }
    }
  }, function (hostedFieldsErr, hostedFieldsInstance) {
    if (hostedFieldsErr) {
      // Handle error in Hosted Fields creation
      return;
    }

    submit.removeAttribute('disabled');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
        if (tokenizeErr) {
          // Handle error in Hosted Fields tokenization
          return;
        }

        // Put `payload.nonce` into the `payment_method_nonce` input, and then
        // submit the form. Alternatively, you could send the nonce to your server
        // with AJAX.
        document.querySelector('input[name="payment_method_nonce"]').value = payload.nonce;
        form.submit();
      });
    }, false);
  });
});


