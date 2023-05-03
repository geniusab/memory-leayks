const users = require("./MOCK_USER.json");
const posts = require("./MOCK_POSTS.json");

const requestListener = (req, res) => {
  res.writeHead(res.statusCode, {
    "Content-Type": "application/json",
  });

  if (req.url === "/posts") {
    res.end(JSON.stringify({ body: JSON.stringify(posts) }));
  }
  if (req.url === "/users") {
    res.end(JSON.stringify({ body: JSON.stringify(users) }));
  }
};

module.exports = requestListener;
