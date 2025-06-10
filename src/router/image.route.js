const express = require("express");
const {
  insertAiImage,
  getAllImage,
  getSingleImage,
} = require("../controller/image.controller");

const imageRouter = express.Router();

imageRouter.post("/create", insertAiImage);
imageRouter.get("/all", getAllImage);
imageRouter.get("/single/:id", getSingleImage);

module.exports = imageRouter;
