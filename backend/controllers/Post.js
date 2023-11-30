const { Post } = require("../models/Post");
const {User} = require("../models/User");
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPost = async (req, res) => {
  const { content, author ,icon,authorName} = req.body;

  let imageUrl = null;
  let videoUrl = null;

  // Check if there is an uploaded file
  if (req.file) {
    const fileType = req.file.mimetype.split("/")[0]; // 'image' or 'video'

    if (fileType === "image") {
      imageUrl = "/" + req.file.path;
      imageUrl = imageUrl.split("/uploads")[1];
    } else if (fileType === "video") {
      videoUrl = "/" + req.file.path;
      videoUrl = videoUrl.split("/uploads")[1];
    }
  }

  const newPost = new Post({ content, imageUrl, videoUrl, author,icon,authorName });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, imageUrl },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePostLikes = async (req, res) => {
  const { postId } = req.params;
  const { action, username } = req.body;
  console.log(action)
  try {
    let updatedPost;

    // Find the post by ID
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Find the user by username
    const user = await User.findOne( {username} );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Perform action based on 'action' provided in the request body
    if (action === "like") {
      // Check if the user already liked the post
      const alreadyLiked = post.likes.some((like) => like.equals(user._id));

      if (alreadyLiked) {
        return res.status(400).json({ message: "User already liked the post" });
      }
    
      // Add user ID to the likes array
      post.likes.push(user._id);
      updatedPost = await post.save();
    } else if (action === "unlike") {
      // Remove user ID from the likes array
      post.likes = post.likes.filter((like) => !like.equals(user._id));
      updatedPost = await post.save();
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
