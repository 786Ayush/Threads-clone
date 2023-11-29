const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");
const {upload} = require("../models/User");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", upload.single("image"), UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:userId/followers", UserController.getAllFollowers);
router.get("/:userId/followings", UserController.getAllFollowings);
router.post("/:userId/followers/add", UserController.addFollower); // Route to add follower
router.post("/:userId/followings/add", UserController.addFollowing); // Route to add following

module.exports = router;
