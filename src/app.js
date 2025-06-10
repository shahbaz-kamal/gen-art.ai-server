const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const getImageBuffer = require("./utils/ai/getImageBuffer");
const generateImageUrl = require("./utils/ai/generateImageUrl");
const app = express();

// middlewares

app.use(express.json());
app.use(cors());
app.use(logger);
//*playground

app.post("/create-image", async (req, res) => {
  const { email, prompt, userName, userImg, category } = req.body;

  if (!email || !prompt || !userName || !userImg || !category) {
    res.status(400).send({
      status: 400,
      message: " please provide email,prompt,userName,userImg,category",
    });
    return;
  }

  // 1 + 2 - create a final prompt generate image buffer

  const buffer = await getImageBuffer(prompt, category);
  const data = await generateImageUrl(buffer, prompt);

  res.send(data);
  //3- upload image and get url

  //4- insert data in mongodb

  // 5- send response

  res.send("hello");
});

//*
app.get("/", (req, res) => {
  res.send("Gen ai server is running");
});

module.exports = app;
