app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

// Need to change these because it's in wrong directory
	$routeProvider.when("/create", {
						templateUrl:"http://localhost:8888/views/partials/createEvent.html",
						controller: 'partyCtrl'
						})
				  	.when('/party', {
						templateUrl:"http://localhost:8888/views/partials/detailedEvents.html",
						controller: 'partyCtrl'
						})
				  	.when('/dashboard', {
			  			templateUrl:"http://localhost:8888/views/partials/dashboard.html",
			  			controller: 'partyCtrl'
			  			})
		  		  	.when('/invitations', {
		  	  			templateUrl:"http://localhost:8888/views/partials/invitations.html",
		  	  			controller: 'partyCtrl'
		  	  			})
  		  		  	.when('/myparties', {
  		  	  			templateUrl:"http://localhost:8888/views/partials/myParties.html",
  		  	  			controller: 'partyCtrl'
  		  	  			})
  		  		  	.when('/settings', {
  		  	  			templateUrl:"http://localhost:8888/views/partials/settings.html",
  		  	  			controller: 'partyCtrl'
  		  	  			})
  		  		  	.when('/myTwitter', {
  		  		  		templateUrl:"https://twitter.com/DmsChris",
  		  		  		controller: 'partyCtrl'
  		  		  	})

				  .otherwise({redirectTo: "/dashboard"});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);