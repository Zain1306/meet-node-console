let express = require('express');
let app = express();
var bodyParser = require('body-parser')
require('dotenv').config()

app.use(function(req,res,next){
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

console.log("HELLO"); 

 app.use(express.static(__dirname + "/public"));
// Assets at the /public route
 app.use("/public", express.static(__dirname + "/public"));

app.get("/json",function(req,res){
    if(process.env.MESSAGE_STYLE === "uppercase")
    {
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
});

function gettime()
{
    return new Date().toString();
}

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
      echo: word
    });
  });

app.get("/name",function(req,res)
{
   res.json({
    name:req.query.first+" "+req.query.last
  });
}
app.use(bodyParser.urlencoded({extended: false}));




























 module.exports = app;
