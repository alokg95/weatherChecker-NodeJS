var http = require("http");
var my_name = "Alok";


function get(zipCode){
var API = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial";
var request = http.get(API, function(response){
	var body = "";

	response.on('data', function(stats){
		body += stats; 
		
	});

	response.on('end', function(){
		var weather = JSON.parse(body);
		console.log("The current temperature in " + weather.name + " is " +  weather.main.temp + " degrees F. ");
	});

});

}

module.exports.get = get; 



