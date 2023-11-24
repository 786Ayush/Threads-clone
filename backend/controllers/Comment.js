const Comment = require("../models/Comment");
const Post = require("../models/Post");

exports.createComment = async (req, res) => {
  const { content, postId, userId } = req.body;
  const newComment = new Comment({ content, post: postId, author: userId });

  try {
    const savedComment = await newComment.save();
    // Update the comments array in the corresponding Post document
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: savedComment._id } },
      { new: true }
    );

    if (!updatedPost) {
      await Comment.findByIdAndDelete(savedComment._id); // Rollback the comment creation
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Remove the comment reference from the associated Post document
    const updatedPost = await Post.findByIdAndUpdate(
      deletedComment.post,
      { $pull: { comments: deletedComment._id } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
