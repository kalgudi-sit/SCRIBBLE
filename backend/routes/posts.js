const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const verifyToken = require("../verifyToken");

// Create post
router.post("/create", verifyToken, async (req, res) => {
    try {
        const userPost = new Post(req.body);
        const savedPost = await userPost.save();
        return res.status(200).json(savedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Update post
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        return res.status(200).json(updatedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Delete post
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Get post details
router.get("/:id", async (req, res) => {
    try {
        const requieredPost = await Post.findById(req.params.id);
        return res.status(200).json(requieredPost);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Get all posts -or- search post
router.get("/", async (req, res) => {
    const searchCriteria = req.query.search || "" ;
    try {
        const searchFilter = {
            title: { $regex: searchCriteria, $options: "i" }
        }
        const allPosts = await Post.find(req.query ? searchFilter : null);
        return res.status(200).json(allPosts);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Get user posts
router.get("/user/:userId", async (req, res) => {
    try {
        const userPosts = await Post.find({ userId: req.params.userId });
        return res.status(200).json(userPosts);
    } catch (error) {   
        return res.status(500).json(error);
    }
});

module.exports = router;