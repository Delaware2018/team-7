var express     = require("express"),
	app 		= express(),
	mongoose	= require("mongoose");
   app.set('view engine', 'ejs');

app.get("/", function(req, res){
   	res.render("home");
   });

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/register", function(req, res){
	res.render("register");
});


app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})
