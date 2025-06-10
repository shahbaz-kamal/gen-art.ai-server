const express = require("express");
const { postUserComment } = require("../controller/comment.controller");
const commentRouter = express.Router();

// commentRouter.get("/comment/:imageId")
commentRouter.post("/create", postUserComment);

module.exports = commentRouter;
