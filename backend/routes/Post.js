const express = require("express");
const router = express.Router();
const PostController = require("../controllers/Post");
const {upload} = require("../models/Post");

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);
router.post("/",upload.single("file"), PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.post("/:postId/likes", PostController.updatePostLikes); // Route for updating post likes

module.exports = router;
