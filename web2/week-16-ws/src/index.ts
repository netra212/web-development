import { WebSocketServer, WebSocket } from "ws";

const wss = WebSocketServer({ port: 8080 });

// event handler.
wss.on("connection", function (socket: WebSocket) {
  console.log("user connected.");
  setInterval(() => {
    socket.send("Current Price of solana is : " + Math.random());
  }, 500);
  socket.send("Hii");

  socket.on("message", (e) => {
    if (e.toString() === "ping"){
        socket.send("pong");
    }
  });

});
