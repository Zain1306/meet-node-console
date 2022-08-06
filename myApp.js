let express = require('express');
let app = express();



 
 app.use(express.static(__dirname + "/public"));
// Assets at the /public route
 app.use("/public", express.static(__dirname + "/public"));

app.get("/json",function(req,res){
    res.json(
        { "message": "Hello json" }
    )
});


































 module.exports = app;
