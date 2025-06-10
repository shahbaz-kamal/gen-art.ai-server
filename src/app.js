const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const app = express();

// middlewares

app.use(express.json());
app.use(cors());
app.use(logger)
//*playground





//*
app.get("/", (req, res) => {
  res.send("Gen ai server is running");
});

module.exports = app;
