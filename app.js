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

app.get("/api/user", function(req, res){
	console.log(res);
	//register user with id of x
	const user = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
};
	res.send(8);
});

app.post("/updateuser", function(req, res){
	console.log(req);
	res.send("user");
});

app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})
