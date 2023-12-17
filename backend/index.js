// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User");
const commentRoutes = require("./routes/Comment");
const postRoutes = require("./routes/Post");
const authRoutes = require("./routes/Auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
// Middlewares

const Auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];

    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.username) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
};
app.use(express.static("build"));

app.use(cors());
app.use(express.json({ limit: "10mb" })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Adjust the limit as needed

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
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

// Server Listening
app.listen(process.env.PORT, () => {
  console.log(`Server Listening at PORT ${process.env.PORT}`);
});
