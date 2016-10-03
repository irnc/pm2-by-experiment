## `cluster` mode

Clients fail to connect to cluster mode processes:

```
socket.io.js:4026 WebSocket connection to 'ws://localhost:3000/socket.io/?EIO=3&transport=websocket&sid=UBuQ9h7ht3Nu5zXZAAAD' failed: Connection closed before receiving a handshake response
```

## `fork` mode

Fork mode processes couldn't reuse the same port.

PM2 exposes `process.env.NODE_APP_INSTANCE` for the rescue.

`.listen(Number(PORT) + Number(NODE_APP_INSTANCE))`
