var express = require ('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//initialisation d'express
app.use(express.static('public'));
http.listen(3300, function() {
	console.log('Server OK, listen on port 3300!');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//chaque socket déclenche l'événement connected ou disconnected
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

//les messages s'affichent dans la console
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

//tout le monde peut recevoir les messages
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
