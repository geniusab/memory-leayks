const http = require("http");

const server = http.createServer();

server.on("error", (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(4002, () => {
  console.log(`Server started on port ${4002}`);
});
