//function myEventFunction(){


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TestSchema = new Schema({"username" : String, 
"password" : String, 
"email" : String, 
"Friends_username" : [],
"Event_name" : [], 
"month_id" : [], 
"day_id" : []},
{ collection : 'UserInfo' });


var mongoDB = 'mongodb://mongodb5058ma:ni6vep@danu7.it.nuigalway.ie:8717/mongodb5058';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, });
console.log("Connected to db");

var Test = mongoose.model("Test", TestSchema);
var myobj = new Test({Friends_username : "Kevin12"});

var condition = { "username" : "Henry40" };
var update = { $push:{Friends_username : "Kevin12"}};
var options = { multi : true };
var query = Test.find(condition);

var doc = Test.updateOne(condition, update, options, callback);

function callback (err, numAffected) {
 		if (err) return console.error(err);
	}

console.log("Friend has been added");



//});