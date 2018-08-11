// initial values
$(document).ready(function(){
	// 1. Link to Firebase

// configure firebase

// initialize firebase
  var config = {
    apiKey: "AIzaSyCFG0fTPlppCwusSp4DoSffxpP0EMO1hJ8",
    authDomain: "train-4ed6f.firebaseapp.com",
    databaseURL: "https://train-4ed6f.firebaseio.com",
    projectId: "train-4ed6f",
    storageBucket: "",
    messagingSenderId: "9952043263"
  };

  firebase.initializeApp(config);

//   create a variable for firebase.database

var database = firebase.database();



	// 2. Button for adding Trains
	$("#addTrainBtn").on("click", function(){

		// Grabs user input and assign to variables
		var trainName = $("#trainNameInput").val().trim();
		var lineName = $("#lineInput").val().trim();
		var destination = $("#destinationInput").val().trim();
		var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
		var frequencyInput = $("#frequencyInput").val().trim();

		// Test for variables entered
		console.log(trainName);
		console.log(lineName);
		console.log(destination);
		console.log(trainTimeInput);
		console.log(frequencyInput);

		// Creates local "temporary" object for holding train data
		// Will push this to firebase
		

		// pushing trainInfo to Firebase
		// trainData.push(newTrain);

		// clear text-boxes
	
		// Prevents page from refreshing
	// 	return false;
	// });

	

		// assign firebase variables to snapshots.

		
		// Test for correct times and info
	
    // Append train info to table on page
    
		// $("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseLine + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

	});
});
