const express = require('express');
const getImageBuffer = require('../utils/ai/getImageBuffer');
const generateImageUrl = require('../utils/ai/generateImageUrl');
const { imageCollection } = require('../utils/connectDB');

const imageRouter=express.Router()

imageRouter.post("/create-image", async (req, res) => {
    const { email, prompt, userName, userImg, category } = req.body;
  
    if (!email || !prompt || !userName || !userImg || !category) {
      res.status(400).send({
        status: 400,
        message: " please provide email,prompt,userName,userImg,category",
      });
      return;
    }
  
    // 1 + 2 - create a final prompt generate image buffer
    try {
      //3- upload image and get url
      const buffer = await getImageBuffer(prompt, category);
      const data = await generateImageUrl(buffer, prompt);
  
      //4- insert data in mongodb
      const document = {
        email,
        userName,
        userImg,
        prompt,
        category,
        thumb_img: data.data.thumb.url,
        medium_img: data.data.medium.url,
        original_img: data.data.url,
        createdAt: new Date().toISOString(),
      };
  
      const result = await imageCollection.insertOne(document);
      console.log(document);
      // 5- send response
      res.status(201).send({
        status: 201,
        message: "Image generated and saved successfully!",
        imageUrl: document.original_img,
        thumbnailUrl: document.thumb_img,
        mediumUrl: document.medium_img,
        dbInsertionId: result.insertedId,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  module.exports=imageRouter