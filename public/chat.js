const url = window.location.hostname;
var socket = io.connect(url);

//declaring the required variable
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
//emit events

btn.addEventListener('click', function(){
  socket.emit('chat',{
    message: message.value,
    handle: handle.value
  });
  message.innerHTML = "";
});

message.addEventListener('keypress', function(){
  socket.emit('typing',handle.value);
});

//listen for events
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><b>'+ data.handle +' : </b>'+ data.message +'</p>';
});

socket.on('typing', function(handleData){
  feedback.innerHTML = '<p><em>'+ handleData +' is typing...</em></p>';
});
