// routes/authRouter.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");

// POST request to handle login
router.post("/signup", authController.createUser);
router.post("/login", authController.login);

module.exports = router;
