//function myFunction(){


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
mongoose.connect(mongoDB, { useNewUrlParser: true });
console.log("Connected to db");

var Test = mongoose.model("Test", TestSchema);

var username = "Henry40";
var myobj = new Test({"username" : username, "password" : "Pass123word", "email" : "K.HENRY4@nuigalway.ie","Friends_username" : "", "Event_name" : "", "month_id" : "", "day_id" : ""});

var condition = { "username" : username};
var query = Test.find(condition);
var doc = Boolean(query);

//if(query = Test.find(condition)){
//console.log("Username Already Exists");
//}
//else{

myobj.save(function (err, body){
if (err) return console.error(err);
console.log(body+" Inserted");

});

//}





//}