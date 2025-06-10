const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jxshq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// databas ecollection
const db = client.db("gen-art-ai-db");
const imageCollection = db.collection("images");
const commentCollection = db.collection("comments");

async function connectDB() {
  return client.connect();

  //   try {
  //      Connect the client to the server	(optional starting in v4.7)
  //     await client.connect();
  //      Send a ping to confirm a successful connection
  //     await client.db("admin").command({ ping: 1 });
  //     console.log(
  //       "Pinged your deployment. You successfully connected to MongoDB!"
  //     );
  //   } finally {
  //      Ensures that the client will close when you finish/error
  //     await client.close();
  //   }
}
connectDB().catch(console.dir);

module.exports = { connectDB, imageCollection, commentCollection };
