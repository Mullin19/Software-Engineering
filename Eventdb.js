//function myEventFunction(){


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TestSchema = new Schema({"username" : String, 
"password" : String, 
"email" : String, 
"Event_name" : [], 
"month_id" : [], 
"day_id" : []},
{ collection : 'UserInfo' });


var mongoDB = 'mongodb://mongodb5058ma:ni6vep@danu7.it.nuigalway.ie:8717/mongodb5058';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, });
console.log("Connected to db");

var Test = mongoose.model("Test", TestSchema);
var myobj = new Test({Event_name : "Software Engineering", 
						month_id : "3", 
						day_id : "19"});

var condition = { "username" : "Henry4" };
var update = { $push:{ Event_name : "Software Engineering"}};
var options = { multi : true };
var query = Test.find(condition);

Test.updateOne(condition, update, options, callback);

function callback (err, callback) {
 if (err) return console.error(err);
}
console.log("Event has been added");


//myobj.save(function (err, body){
//if (err) return console.error(err);
//Test.save(body);


//});

//});