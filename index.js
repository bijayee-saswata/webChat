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
  socket.on('chat', function(data){
    io.sockets.emit('chat', data); //emit data to all connected clients
  });

  socket.on('typing', function(handleData){
    socket.broadcast.emit('typing',handleData);
  });

});
