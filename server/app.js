const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

const publicPath = path.join(__dirname, '../public');

var io = require('socket.io')(http);

app.use(express.static(publicPath));

var clients = 0;

io.on('connection', function(socket) {
	clients++;
   console.log('A user connected');

   io.emit('broadcast', { description: clients + ' clients connected !'});
   
   socket.on('clientEvent', (message) => {
   	console.log(message.text);
   })

   socket.emit('testerEvent', { description:'A custom event'});
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
      clients--;
      io.emit('broadcast', {description: clients + ' clinets connected'})

   });

});

http.listen(3000, () => {
	console.log('listening on 3000');
})
