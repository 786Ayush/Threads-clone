const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/Comment");

router.post("/:postId", CommentController.createComment);
router.delete("/:id", CommentController.deleteComment);

module.exports = router;
