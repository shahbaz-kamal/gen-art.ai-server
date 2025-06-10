const generateAiReply = require("../utils/ai/generateAiReply");
const { commentCollection } = require("../utils/connectDB");

const postUserComment = async (req, res) => {
  const { imageId, prompt, userEmail, comment } = req.body;
  if (!imageId || !prompt || !userEmail) {
    res.status(400).send({
      status: 400,
      message: "please provide imageId,prompt,email",
    });
    return;
  }
  try {
    const reply = await generateAiReply(prompt, comment);
    const document = {
      prompt,
      imageId,
      userEmail,
      comment,
      createdAt: new Date().toISOString(),
      reply,
    };
    const result = commentCollection.insertOne(document);
    res.send({ ...result, reply });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
};

module.exports = { postUserComment };
