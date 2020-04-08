console.log('Server-side code running');

var express = require('express');
var router = express.Router();
module.exports = router;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

router.use(express.static('public'));

var UserSchema = new Schema({"username" : String, 
"password" : String, 
"email" : String, 
"Friends_username" : [],
"Event_name" : [], 
"month_id" : [], 
"day_id" : [],
"timetable" : []},
{ collection : 'UserInfo' });


var mongoDB = 'mongodb://mongodb5058ma:ni6vep@danu7.it.nuigalway.ie:8717/mongodb5058';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, });
console.log("Connected to db");

var User = mongoose.model("User", UserSchema);


var myobj = new User({"username" : username, "password" : password, "email" : email,"Friends_username" : "", "Event_name" : "", "month_id" : "", "day_id" : "", timetable : ""});



//get homepage
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



// add a document to the DB collection
router.post('/UserInfo', (req, res) => {
 
 var condition = { "username" : username};

var query = User.find({condition}, function(err, body){
	console.log("Name has been taken");
	res.json("This name has been taken");
	
    if(err){
        console.log("Name has not been taken");
		
		myobj.save(function (err, body){
	if (err) return console.error(err);
	
	console.log(body+" Inserted");
        res.json("Account has been made");
			res.sendStatus(201);
    });
	}
		

});
 
});
