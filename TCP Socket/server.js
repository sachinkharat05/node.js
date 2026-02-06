const net = require("net");

// Create Server
const server = net.createServer((socket) => {

    console.log("Client connected");

    // When client sends data
    socket.on("data", (data) => {

        const message = data.toString();

        console.log("Client says:", message);

        // Send reply
        const reply = "Hello Client, I received: " + message;

        socket.write(reply);
    });

    // When client disconnects
    socket.on("end", () => {
        console.log("Client disconnected");
    });
});

// Start listening
server.listen(5000, () => {
    console.log("Server started on port 5000");
});
