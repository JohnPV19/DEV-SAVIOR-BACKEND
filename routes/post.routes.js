const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/Post.model")
const User = require("../models/User.model")
router.get("/posts", (req, res) => {
    Post
      .find({})
      .populate("username")
      .then((posts) => res.json(posts))
      .catch((error) => res.json(error));
  });
  router.get("/posts/:_id", (req, res) => {
    const { _id } = req.params;
    Post
      .findById(_id)
      .populate("username")
      .then((post) => res.json(post))
      .catch((error) => res.json(error));
  });
    // Creates a new post
  router
      .post("/posts/new", (req, res) => {
      const { title, bodyText, img, username } = req.body;
    Post
      .create({ title, bodyText, img, username })
      .then((post) => res.json(post))
      .catch((error) => res.status(500).json({ error: "Failed to create post", details: error }));
});
    // Edits a specific post
router.put("/posts/edit/:_id", (req, res) => {
    const { _id } = req.params;
    const { title, bodyText, img } = req.body; // Retrieve data from req.body
    Post
      .findByIdAndUpdate(_id, { title, bodyText, img }, { new: true }) // { new: true } returns the updated post
      .then((updatedPost) => {
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
          }
            res.json(updatedPost)}) // Send the updated post as JSON response)
      .catch((error) => res.status(500).json({ error: "Failed to update post", details: error }));
});
    // Deletes a specific post
router.delete("/posts/:_id", (req, res) => {
    const { _id } = req.params;
    Post
      .findByIdAndDelete(_id)
      .then(() => res.json({ message: 'Post deleted successfully' }))
      .catch((error) => res.json(error));
});
module.exports = router;