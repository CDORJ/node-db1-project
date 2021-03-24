const express = require("express");
const accountsRouter = require("./accounts/accounts-router.js");
const helmet = require("helmet");

const server = express();

server.use(express.json(), helmet());

server.use("/api/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


module.exports = server;
