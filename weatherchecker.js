var http = require("http");

var request = http.get("http://api.wunderground.com/api/a0c510a81db3d0ab/conditions/q/CA/Fremont.json", function(response){
	var body = "";

	response.on('data', function(stats){
		body += stats; 
		
	});

	response.on('end', function(){
		var weather = JSON.parse(body);
		console.log(weather);

	});

}); 


