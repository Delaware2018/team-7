var express     = require("express"),
	app 		= express(),
	mongoose	= require("mongoose");

app.use("/", function(req, res){
	res.render("home");
});

app.use("/login", function(req, res){
	res.render("login");
});

app.use("/register", function(req, res){
	res.render("register");
});

app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})