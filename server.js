const express = require("express");
const helmet = require("helmet");

const Router = require("./data/routes/projectRouter");

const server = express();

const globalMiddleware = [helmet(), express.json()];

server.use("/projects", globalMiddleware, Router);

module.exports = server;
