const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 5001;
require("dotenv").config();

app.use(express.json());

const posts = [
  {
    username: "gtuges",
    title: "title 1",
  },
  {
    username: "stuges",
    title: "title 2",
  },
  {
    username: "jtuges",
    title: "title 3",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
  console.log("get send !");
});

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // console.log(` authHeader : ${authHeader}`)

  const token = authHeader && authHeader.split(" ")[1];

  // console.log(` Authenticate : ${token}`)

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
