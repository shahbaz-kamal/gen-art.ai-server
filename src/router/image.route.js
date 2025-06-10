const express = require("express");
const {
  insertAiImage,
  getAllImage,
} = require("../controller/image.controller");

const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all", getAllImage);
module.exports = imageRouter;
