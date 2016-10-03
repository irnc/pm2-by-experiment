const io = require('socket.io')();
const port = process.env.PORT || '3000';

io.on('connection', function(client){
  console.log('connection event');

  client.on('message', (payload) => {
    io.emit('echo', Object.assign({ echo: true }, payload));
  });
});

io.listen(port);
console.log(`listening on port ${port}`);
