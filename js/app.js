var eventInfo = [];


var app = angular.module("partyApp", ["ngRoute", "firebase"]);

app.controller("partyCtrl", ["$scope", "$firebaseArray", "$firebaseObject", 
	function($scope, $firebaseArray, $firebaseObject) {

	var ref = new Firebase("https://createevent.firebaseio.com");
	$scope.party = $firebaseArray(ref);
	$scope.listenNewParty = false;
	$scope.numLimit = 6;


	//Creates Event
	$scope.createThatEvent = $("#createEvent").click(function(){
		var eventName = document.getElementById("inputEvent").value;
		var eventDate = document.getElementById("inputDate").value;
		var eventTime = document.getElementById("inputTime").value;
		var eventImage = document.getElementById("inputImage").value;
		var eventState = document.getElementById("inputState").value;
		var eventCity = document.getElementById("inputCity").value;
		var eventZip = document.getElementById("inputZip").value;
		var eventAddress = document.getElementById("inputAddress").value;
		var eventEmail = document.getElementById("inputEmail").value;

		$scope.party.$add({ eventtag: eventName,
								date: eventDate, 
								time: eventTime, 
								state: eventState, 
								city: eventCity, 
								zip: eventZip, 
								address: eventAddress, 
								email: eventEmail,
								image: eventImage});

		document.getElementById("inputEvent").value = "";
		document.getElementById("inputDate").value = "";
		document.getElementById("inputTime").value = "";
		document.getElementById("inputState").value = "";
		document.getElementById("inputCity").value = "";
		document.getElementById("inputAddress").value = "";
		document.getElementById("inputEmail").value = "";
		document.getElementById("inputZip").value = "";
		document.getElementById("inputImage").value = "";

		//Alert for new party and invite friends
		$scope.listenNewParty = true;

	});

}]);



