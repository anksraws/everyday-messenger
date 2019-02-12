var socket = io();
	
socket.on('connect', function () {
	console.log('connected to server');
	
   socket.emit('clientEvent', {
   	text: 'i am doing socket.io'
   })

})
	
socket.on('testerEvent',(message) => {
	console.log(message.description);
})
   
socket.on('broadcast' ,(message) => {
	console.log(message.description)
})

socket.on('newclientconnect', (data) => {
	console.log("i love "+data.description)
})

socket.on('disconnect',function () {
	console.log('disconnected from server');
})

