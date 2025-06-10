const app = require("./src/app");
const connectDB = require("./src/utils/connectDB");

require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚩 GEN ART.AI is running on port : ${port}`);
      console.log(`✅ Connected to MONGODB`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
