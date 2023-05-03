const http = require("http");
const logger = require("./logs.js");

logger.run();

const requestListener = require("./routes");

const server = http.createServer(requestListener);

server.on("error", (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(3000, () => {
  console.log(`Server started on port ${3000}`);
});
