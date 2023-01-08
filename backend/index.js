var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoute = require('./routes/appRoutes');
var mongoose = require('mongoose');

var res=mongoose.connect('mongodb://localhost/meanDb', { useNewUrlParser: true });
if(res){
    console.log("connected");
}else{
    console.log("not connected");
}
app.use('/', appRoute);

http.createServer(app).listen(port);

console.log("server is running on port:", port);