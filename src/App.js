const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Configure middleware, routes, and WebSocket logic

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
