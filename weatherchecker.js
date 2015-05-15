var http = require("http");

var request = http.get("http://api.openweathermap.org/data/2.5/weather?zip=93106,us&units=imperial", function(response){
	var body = "";

	response.on('data', function(stats){
		body += stats; 
		
	});

	response.on('end', function(){
		var weather = JSON.parse(body);
		console.log("The current weather is " + weather.weather.main + " (" + weather.main.temp + " degrees F) " + "in " + weather.name + ".");
	});

});


