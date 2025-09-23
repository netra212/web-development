"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = (0, ws_1.WebSocketServer)({ port: 8080 });
// event handler. 
wss.on("connection", function (socket) {
    console.log("user connected.");
    socket.send("Hii");
});
//# sourceMappingURL=index.js.map