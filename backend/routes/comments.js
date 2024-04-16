const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Create comment
router.post("/create", async (req, res) => {
    try {
        const userComment = new Comment(req.body);
        const savedComment = await userComment.save();
        return res.status(200).json(savedComment);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Update comment
router.put("/:id", async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.status(200).json(updatedComment);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Delete comment
router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletedComment);
    } catch (error) {
        return res.status(500).json(error);
    }
});

// Get post comments
router.get("/post/:postId", async (req, res) => {
    try {
        const postComments = await Comment.find({ postId: req.params.postId });
        return res.status(200).json(postComments);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;
