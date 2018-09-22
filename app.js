var express     = require("express"),
	app 		= express(),
	mongoose	= require("mongoose")
	bodyParser	= require("body-parser"),
	router 		= express.Router();
//	var Json2csvParser = require('json2csv').Parser;
	var csvWriter = require('csv-write-stream');
	var writer = csvWriter();
	const jsonfile = require('jsonfile');
	var fs = require('file-system');
	let fileInputName = 'users_file.csv';
	const file = 'data.json'
	let csvToJson = require('convert-csv-to-json');
	csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);

	writer.pipe(fs.createWriteStream('users_file.csv'));

	var user1 = {

		username: "bobbym1",
		password: "socks4ever",
		firstName: "Bobby",
		lastName: "Morgan",
		age: 20,
		married: "Y",
		children: 3,
		income: 40000,
		location: "Wilmington, DE",
		donations: 101,
		points: 60,
		purchases: 20

	}

	const user2 = {

		username: "sallym1",
		password: "boots4ever",
		firstName: "Sally",
		lastName: "Morgan",
		age: 23,
		married: "N",
		children: 1,
		income: 90000,
		location: "San Francisco, CA",
		donations: 28,
		points: 364,
		purchases: 45

	}

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
   	res.render("home");
});

app.get("/login", function(req, res){



	res.render("login", {	username: user1.username,
		password: user1.password,
		firstName: user1.firstName,
		lastName: user1.lastName,
		age: user1.age,
		married: user1.married,
		children: user1.children,
		income: user1.income,
		location: user1.location,
		donations: user1.donations,
		points: user1.points,
		purchases: user1.purchases
});
});


app.post("/login", function(req, res){
	// res.send();
	// console.log("working");
	// //function to handle the username and password
	// var username = req.body.username;
	// var password = req.body.password;
	//
	// function checkUser(username, password){
	// 	return true;
	// }
	// if (checkUser(username, password)){
	// 	console.log("working");
	// 	res.redirect("user");
	// } else {
		res.redirect("user");
	// }
});

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req,res){

	// var username = req.body.username;
	// var password = req.body.password;
	// var firstname = req.body.firstName;
	// var lastname = req.body.lastName;
	// var age = req.body.age;
	// var married = req.body.married;
	// var children = req.body.children;
	// var income = req.body.income;
	// var location = req.body.location;
	// var donations = req.body.donations;
	// var points = req.body.points;
	// var purchases = req.body.purchases;
	obj = {
			"firstName":req.body.firstName,
			"lastName":req.body.lastName,
			"age":req.body.age,
			"phoneNumber":req.body.phoneNumber,
			"username":req.body.username,
			"password":req.body.password,
			"city":req.body.city,
			"children":req.body.children,
			"married":req.body.married,
			"income":req.body.income
	}
	jsonfile.writeFile(file, obj, function(err) {
		if (err) console.log(err)
	});
	// writer.write({
	// 	"firstName":req.body.firstName,
	// 	"lastName":req.body.lastName,
	// 	"age":req.body.age,
	// 	"phoneNumber":req.body.phoneNumber,
	// 	"username":req.body.username,
	// 	"password":req.body.password,
	// 	"city":req.body.city,
	// 	"children":req.body.children,
	// 	"married":req.body.married,
	// 	"income":req.body.income
	// });
	//writer.end();
	//writer.pipe(fs.createWriteStream('users_file.csv'));

	//writer.end();
	console.log("after end");
	console.log(fileInputName);
	//var jsonResult = csvToJson.getJsonFromCsv(fileInputName);
	//console.log(jsonResult);

	res.redirect("login");


});

app.get("/donate", function(req,res){
	res.render("donate");
});
app.get("/purchase", function(req,res){
	res.render("purchase");
});


app.get("/user", function(req, res){
	//suppose to check if user name is logged in
	//should give user access to user webpage
	var obj;
	fs.readFile(file, 'utf8', function(err,data) {
		if (err) throw err;
		console.log("data");
		obj = JSON.parse(data);
		console.log(obj);
		console.log(obj.username);
		res.render("user", {	username: obj.username,
			password: obj.password,
			firstName: obj.firstName,
			lastName: obj.lastName,
			age: obj.age,
			married: obj.married,
			children: obj.children,
			income: obj.income,
			location: obj.location,
			donations: obj.donations,
			points: obj.points,
			purchases: obj.purchases
	});
	});

  // res.send(user1.name);
	//var jsonResult = csvToJson.getJsonFromCsv(fileInputName);
	//console.log(jsonResult[0]);

});

app.get("/about_us", function(req, res){
	res.render("about_us");
});

app.get("/need", function(req, res){
	res.render("need");
});

// app.get("/api/user", function(req, res){
// 	console.log(res);
// 	//register user with id of x
// 	const user = {
//     "glossary": {
//         "title": "example glossary",
// 		"GlossDiv": {
//             "title": "S",
// 			"GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
// 					"SortAs": "SGML",
// 					"GlossTerm": "Standard Generalized Markup Language",
// 					"Acronym": "SGML",
// 					"Abbrev": "ISO 8879:1986",
// 					"GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
// 						"GlossSeeAlso": ["GML", "XML"]
//                     },
// 					"GlossSee": "markup"
//                 }
//             }
//         }
//     }
// };
// 	res.send(8);
// });

app.post("/updateuser", function(req, res){
	//console.log(req);
	//only uncomment once user page is finished
	//send them the json but first convert it to csv

	res.send("user");
});

app.post("/donate", function(req, res){

//add donation stats
res.render("purchase");

});

app.listen(8080, function(){
	console.log("PORT = "+process.env.PORT);
	console.log("The server is running");
})
