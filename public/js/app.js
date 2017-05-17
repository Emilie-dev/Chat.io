var socket = io();

//le serveur récupére les messages
$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
});


//les message s'affichent du côté client 
$(function () {
  var socket = io();
  $('form').submit(function(){
  	socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').append(msg));
  });
});

