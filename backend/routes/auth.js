const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // Validate if user registered
      return res.status(404).json({ message: "User Not Found" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      // Validate user password
      return res.status(401).json({ message: "Wrong Credentials" });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.SECRET,
      {
        expiresIn: "3d",
      }
    ); // first argument is payload
    const { password, ...info } = user._doc; // password is saperated, not shared with user
    return res.cookie("token", token).status(200).json(info);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Logout
router.get("/logout", async (req, res) => {
  try {
    return res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Could not log out user" });
  }
});

// Refetch => To make sure user stays logged in even after refresh
router.get("/refetch", async (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.SECRET, {}, (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    console.log(data);
    return res.status(200).json(data);
  });
});

module.exports = router;