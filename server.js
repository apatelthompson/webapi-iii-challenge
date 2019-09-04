const express = require("express");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();
server.use(express.json());

server.use("/posts", postRouter);
server.use("/users", userRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
