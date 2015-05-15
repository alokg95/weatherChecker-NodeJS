var weatherchecker = require("./weatherchecker");
var zipcodes = process.argv.slice(2);

zipcodes.forEach(weatherchecker.get);