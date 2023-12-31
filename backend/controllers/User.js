const { User } = require("../models/User"); // Adjust the path as needed
const jwt = require("jsonwebtoken");

// Controller functions
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); // Exclude password field
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password field
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const username = req.body.username;

    if (!username) {
      return res
        .status(400)
        .json({ message: "Username is required in the query parameters." });
    }

    const regex = new RegExp(username, "i");
    const users = await User.find({
      $or: [{ name: { $regex: regex } }, { username: { $regex: regex } }],
    });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedUserData },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllFollowers = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId).populate("followers", "username");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.followers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllFollowings = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId).populate("following", "username");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.following);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFollower = async (req, res) => {
  try {
    const userId = req.params.userId; // ID of the user to be followed
    const followerUN = req.body.followerUN; // Username of the follower

    // Find the user to follow
    const userToFollow = await User.findById(userId);
    if (!userToFollow) {
      return res.status(404).json({ message: "User to follow not found" });
    }

    // Find the follower by username
    const follower = await User.findOne({ username: followerUN });
    if (!follower) {
      return res.status(404).json({ message: "Follower not found" });
    }

    // Check if the user is already being followed by this follower
    const isAlreadyFollowing = userToFollow.followers.some((existingFollower) =>
      existingFollower.equals(follower._id)
    );
    if (isAlreadyFollowing) {
      return res
        .status(400)
        .json({ message: "User is already being followed" });
    }

    // Add follower to user's followers list
    userToFollow.followers.push(follower._id);
    await userToFollow.save();

    res.json({ message: "Follower added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFollowing = async (req, res) => {
  try {
    const userId = req.params.userId; // ID of the user to start following
    const followingUN = req.body.followingUN; // Username of the user to be followed

    // Find the user who wants to start following
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the user to be followed by username
    const userToFollow = await User.findOne({ username: followingUN });
    if (!userToFollow) {
      return res.status(404).json({ message: "User to follow not found" });
    }

    // Check if the user is already following the other user
    const isAlreadyFollowing = user.following.some((existingFollowing) =>
      existingFollowing.equals(userToFollow._id)
    );
    if (isAlreadyFollowing) {
      return res.status(400).json({ message: "User is already following" });
    }

    // Add user to followings list
    user.following.push(userToFollow._id);
    await user.save();

    res.json({ message: "Started following successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
