const http = require("http");

const RUN_TEST = 5;
const connections = 300;
const API = {
  get: function (url) {
    http
      .get("http://localhost:4001/" + url, (res) => {
        let data = [];

        res.on("data", (chunk) => {
          data.push(chunk);
        });

        res.on("end", () => {
          JSON.parse(Buffer.concat(data).toString());
        });
      })
      .on("error", (err) => {
        console.log("Error: ", err.message);
      });
  },
};
let count = 0;

const req = (url, i) => {
  API.get(url);
};

const callAPI = () => {
  for (let i = 0; i < connections; i++) {
    req("users", i);
    req("posts", i);
  }
};

let intervalID = setInterval(function () {
  callAPI();
  if (++count === RUN_TEST) {
    clearInterval(intervalID);
  }
  console.log(`{finish [${count}]`, count);
}, 10000);
