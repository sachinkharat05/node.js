const net = require("net");

// Create Client
const client = new net.Socket();

// Connect to server
client.connect(5000, "localhost", () => {

    console.log("Connected to server");

    // Send message
    client.write("Hello Server!");
});

// Receive data
client.on("data", (data) => {

    console.log("Server says:", data.toString());

    // Close connection
    client.end();
});

// On close
client.on("close", () => {
    console.log("Connection closed");
});
