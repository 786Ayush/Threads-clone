const express = require("express");
const router = express.Router();
const PostController = require("../controllers/Post");

router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPostById);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.post("/:postId", PostController.updatePostLikes);
router.get("/userIdpost/:id", PostController.getPostByUserId); // Route for updating post likes

module.exports = router;
