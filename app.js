var express     = require("express"),
	app 		= express(),
	mongoose	= require("mongoose");


app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})