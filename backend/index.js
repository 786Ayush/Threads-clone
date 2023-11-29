// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User");
const commentRoutes = require("./routes/Comment");
const postRoutes = require("./routes/Post");
const authRoutes = require("./routes/Auth");
const jwt = require("jsonwebtoken");

const app = express();
// Middlewares

const Auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];

    var decoded = jwt.verify(token, "shhhhh");
    if (decoded.username) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};
app.use("/", express.static("uploads"));

app.use(cors());
app.use(express.json());

// Rooutes
app.get("/", (req, res) => {
  res.json("API is Working");
});
app.use("/users", Auth, userRoutes);
app.use("/comments", Auth, commentRoutes);
app.use("/posts", Auth, postRoutes);
app.use("/auth", authRoutes);

// DB Connection
main().catch((error) => console.log(error));
// Main ULR
// `mongodb+srv://rishi:rishi2002@cluster0.ualyzwa.mongodb.net/ecommerce`

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/socialtest", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Server Listening
app.listen(8080, () => {
  console.log("Server Listening at PORT 8080");
});
