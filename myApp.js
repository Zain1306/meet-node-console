let express = require('express');
let app = express();

 app.use("/public",express.static(__dirname + "/public"));

 
 app.use(express.static(__dirname + "/public"));
// Assets at the /public route
 app.use("/public", express.static(__dirname + "/public"));




































 module.exports = app;
