logs:
	pm2 logs

cluster:
	pm2 start server.js --name websocket-server -i max

fork:
	# -x --execute-command    execute a program using fork system
	pm2 start server.js --name websocket-server -i max -x

delete:
	pm2 delete websocket-server
