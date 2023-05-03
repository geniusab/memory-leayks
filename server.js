const http = require("http");
const fs = require("fs");
require("dotenv").config();

const requestListener = require("./routes");

const server = http.createServer(requestListener);

server.on("error", (err) => {
  console.error(`Server error: ${err.message}`);
});

server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
