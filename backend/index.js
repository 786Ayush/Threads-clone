// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User");
const commentRoutes = require("./routes/Comment");
const postRoutes = require("./routes/Post");

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());


// Rooutes
app.get("/", (req, res) => {
  res.json("API is Working");
});
app.use("/users", userRoutes); 
app.use("/comments", commentRoutes);
app.use("/posts", postRoutes);

// DB Connection
main().catch((error) => console.log(error));
// Main ULR
// `mongodb+srv://rishi:rishi2002@cluster0.ualyzwa.mongodb.net/ecommerce`

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/socialtest");
  console.log("DB Connected");
}

// Server Listening
app.listen(8080, () => {
  console.log("Server Listening at PORT 8080");
});
