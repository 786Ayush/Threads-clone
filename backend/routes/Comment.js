const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/Comment");

router.post("/:postId", CommentController.createComment);
router.delete("/:id", CommentController.deleteComment);
router.get("/getcomment/:postId",CommentController.getAllCommentsForPost);

module.exports = router;
