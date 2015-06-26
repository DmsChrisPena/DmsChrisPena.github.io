app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

// Need to change these because it's in wrong directory
	$routeProvider.when("/create", {
						templateUrl:"/views/partials/createEvent.html",
						controller: 'partyCtrl'
						})
				  	.when('/party', {
						templateUrl:"/views/partials/detailedEvents.html",
						controller: 'partyCtrl'
						})
				  	.when('/dashboard', {
			  			templateUrl:"/views/partials/dashboard.html",
			  			controller: 'partyCtrl'
			  			})
		  		  	.when('/invitations', {
		  	  			templateUrl:"/views/partials/invitations.html",
		  	  			controller: 'partyCtrl'
		  	  			})
  		  		  	.when('/myparties', {
  		  	  			templateUrl:"/views/partials/myParties.html",
  		  	  			controller: 'partyCtrl'
  		  	  			})
  		  		  	.when('/settings', {
  		  	  			templateUrl:"/views/partials/settings.html",
  		  	  			controller: 'partyCtrl'
  		  	  			})
  		  		  	.when('/myTwitter', {
  		  		  		templateUrl:"https://twitter.com/DmsChris",
  		  		  		controller: 'partyCtrl'
  		  		  	})

				  .otherwise({redirectTo: "/dashboard"});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);
