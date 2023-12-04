const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Comment = require("../models/Comment.model")
    // Reads all comments
router
    .get('/comments', (req, res) => {
    Comment
    .find({})
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
});
    // Deletes a comment
router
.delete('/comment/:_id', (req, res) => {
    const {_id} = req.params;
    Comment
    .findByIdAndDelete(_id)
    .then(() => res.json({ message: 'Reply deleted successfully' }))
    .catch((error) => res.json(error));
});
    // Creates a new comment
router
    .post("/comment/new", (req, res) => {
      const { content, img, username, saveDate } = req.body;
    Comment
    .create({ content, img, username, saveDate })   // add comments
    .then((reply) => res.json(reply))   // Post.findByIdAndUpdate()
    .catch((error) => res.status(500).json({ error: "Failed to create your reply", details: error }));
  });
    // Edits a specific comment
router
    .put("/comment/edit/:_id", (req, res) => {
    const {_id} = req.params;
    const { content, img } = req.body; // Retrieve data from req.body
    Comment
    .findByIdAndUpdate(_id, { content, img }, { new: true }) // { new: true } returns the updated comment
    .then((updatedComment) => {
          if (!updatedComment) {
              return res.status(404).json({ error: "Post not found" });
            }
              res.json(updatedComment)}) // Send the updated commnent as JSON response)
    .catch((error) => res.status(500).json({ error: "Failed to update post", details: error }));
  });
  module.exports = router;