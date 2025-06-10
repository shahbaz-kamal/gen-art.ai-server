const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Gen ai server is running");
});

app.listen(port, () => {
  console.log(`✅ GEN ART.AI is running on port : ${port}`);
});
