var http = require("http");

var xxx = "fremont";

var request = http.get("http://api.wunderground.com/api/a0c510a81db3d0ab/conditions/q/CA/xxx.json", function(response){
	var body = "";

	response.on('data', function(stats){
		body += stats; 
		console.log(body);
	});

	response.on('end', function(){
		var weather = JSON.parse(body);
		// console.log("The current weather is " + weather.current_observation.weather + ", " + weather.current_observation.temp_f + " degrees (F).");
	});

});


