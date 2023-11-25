const User = require("../models/User"); // Adjust the path as needed
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const newUser = new User({ username, password: hashedPassword });
  const token = jwt.sign({ username: username }, "shhhhh");
  newUser.token = token;
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ username: username }, "shhhhh");
    user.token = token;
    const savedUser = await user.save();
    return res.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
