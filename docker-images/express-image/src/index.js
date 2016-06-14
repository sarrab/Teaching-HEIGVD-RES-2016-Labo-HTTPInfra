var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res){
        res.send(generateLocations() );
        });

app.listen(3000, function(){

	console.log("On port 3000");
});
 function generateLocations(){
	 var nbOfLocations = chance.integer({
		 min: 3,
		 max: 10
	 });
	 console.log(nbOfLocations);
	 var locations = [];
	 for (var i = 0; i < nbOfLocations; i++){
		 locations.push({
			 city: chance.city(),			 
			 country: chance.country({full: true}),
			 postal: chance.postal(),
			 
		 });
		 
		 
	 };
	 console.log(locations);
	 return locations;
 }