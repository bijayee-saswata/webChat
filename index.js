var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();
var server = app.listen(5000, function () {
  console.log("listening to port 5000");
});

//static file
app.use(express.static('public'));

//Socket.io setup
var io = socket(server);
io.on('connection', function(socket){
  console.log("connection established.. ID: " + socket.id);
});
