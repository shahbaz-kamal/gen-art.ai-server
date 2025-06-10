const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const imageRouter = require("./router/image.route");
const commentRouter = require("./router/comment.route");

const app = express();

// middlewares

app.use(express.json());
app.use(cors());
app.use(logger);

// image router

app.use("/api/v1/image", imageRouter);
app.use("/api/v1/comment", commentRouter);

//*playground

//*
app.get("/", (req, res) => {
  res.send("Gen ai server is running");
});

module.exports = app;
