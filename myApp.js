let express = require('express');
let app = express();
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
































 module.exports = app;
