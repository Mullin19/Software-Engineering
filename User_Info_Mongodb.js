function myFunction(){


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({"username" : String, 
"password" : String, 
"email" : String});


var mongoDB = 'mongodb://mongodb5058ma:ni6vep@danu7.it.nuigalway.ie:8717/mongodb5058';
mongoose.connect(mongoDB, { useNewUrlParser: true });
console.log("Connected to db");

var Test = mongoose.model("Test", TestSchema);
var myobj = new Test({"username" : "Henry4", "password" : "Pass123word", "email" : "K.HENRY4@nuigalway.ie"});

myobj.save(function (err, body){
if (err) return console.error(err);
console.log(body+" Inserted");

});

}