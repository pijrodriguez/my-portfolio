/**********************************CONSTS & VARS*************************************/
const NEWPORT = process.env.PORT || 10000;
const express = require("express");
const path = require("path");

var CLF = path.resolve(__dirname, "pages");
var app = express();

const sv = require("http").createServer(app);

app.use("/pics", express.static("imgs"));
app.use("/css", express.static("css"));

app.get("/", function(req, resp){
    resp.sendFile(CLF+"/main.html");
});

/**********************************LISTEN*************************************/
sv.listen(NEWPORT, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log(NEWPORT+" is running");
});
