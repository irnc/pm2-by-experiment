const io = require('socket.io')();
const basePort = process.env.PORT || '3000';
const port = Number(basePort) + Number(process.env.NODE_APP_INSTANCE);

io.on('connection', function(client){
  console.log('connection event');

  client.on('message', (payload) => {
    io.emit('echo', Object.assign({ echo: true }, payload));
  });
});

io.listen(port);
console.log(`listening on port ${port}`);
