var io = require('socket.io').listen(8080);
io.set('transports', ['websocket']);

io.sockets.on('connection', function (socket) {
	socket.on('echoback', function (data) {
		socket.emit('echoresponse', data);
	});
});