const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const getImageBuffer = require("./utils/ai/getImageBuffer");
const generateImageUrl = require("./utils/ai/generateImageUrl");
const { imageCollection } = require("./utils/connectDB");
const imageRouter = require("./router/imageRoutes");
const app = express();

// middlewares

app.use(express.json());
app.use(cors());
app.use(logger);
//*playground

app.use("/api/image", imageRouter);

//*
app.get("/", (req, res) => {
  res.send("Gen ai server is running");
});

module.exports = app;
