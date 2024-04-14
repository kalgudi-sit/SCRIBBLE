const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");


// Update User
router.put("/:id", async (req, res) => {
    try {
        // Update any user information
        // If User modifies password, hash the new password
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const updatedHashedPassword = await bcrypt.hashSync(req.body.password, salt);
            req.body.password = updatedHashedPassword;
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Delete User
router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        await Post.deleteMany({ userId: req.params.id });
        await Comment.deleteMany({userId: req.params.id });
        return res.status(200).json(deletedUser);   
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Find User
router.get("/:id", async (req, res) => {
    try {
        const requestedUser = await User.findById(req.params.id);
        const { password, ...info } = requestedUser._doc; // Password is saperated, not shared with user
        return res.status(200).json(info);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;