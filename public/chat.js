var socket = io.connect('http://localhost:5000');

//declaring the required variable
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emit events

btn.addEventListener('click', function(){
  socket.emit('chat',{
    message: message.value,
    handle: handle.value
  });
});

//listen for events
socket.on('chat', function(data){
  output.innerHTML += '<p><b>'+ data.handle +' : </b>'+ data.message +'</p>';
});
