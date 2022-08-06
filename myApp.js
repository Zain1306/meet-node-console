let express = require('express');
let app = express();
require('dotenv').config()

app.use(function(req,res,next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

 
 app.use(express.static(__dirname + "/public"));
// Assets at the /public route
 app.use("/public", express.static(__dirname + "/public"));

 var delayInMilliseconds = 1000; //1 second

 app.get('/now', (req, res, next) => {
      req.time = new Date().toString();
      next()
 }, (req, res) => {
 setTimeout(function() {
   //your code to be executed after 1 second
     res.json({
       time: req.time
     })
 }, [delayInMilliseconds]);
 }); 
 
app.get("/json",function(req,res){
    if(process.env.MESSAGE_STYLE === "uppercase")
    {
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
});




































 module.exports = app;
