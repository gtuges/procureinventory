const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 5002;
require("dotenv").config();

app.use(express.json());

// import - Normal you would store your refresh token in form of database.
// for this we will store it locally, this is not an ideal, when the server is rest, you loose all the stored tokens
let refreshTokens = [];

app.post("/refreshtoken", (req, res) => {
  // only refresh tokens are sent into this tooken
  const refreshToken = req.body.token;

  // take the refresh token from the user - need to verify this commnet

  // send error if there is no then or its invalid

  //  if everything ir ok, create a new access toke

  // console.log(` refreshtoken -> ${refreshToken}`);
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    // alwys check for errors
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
//   console.log("get send !");
// });

app.get("/posts", (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204).json("Logged out !");
});

app.post("/login", (req, res) => {
  // authentication
  // left off from here https://youtu.be/mbsmsi7l3r4?t=827
  const username = req.body.username;
  const user = { name: username };

  // const accessToken = jwt.sign(user, process.env.ACCSS_TOKEN_SECRET);
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  // console.log(`login ${accessToken}`)

  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
}

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
