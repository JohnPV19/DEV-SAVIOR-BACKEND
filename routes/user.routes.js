const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/User.model")
const Post = require("../models/Post.model")
const Project = require("../models/Project.model")


    // Get specified user
router
    .get("/profile/:_id/user", (req, res) => {
    const {_id} = req.params;
    User
    .findById(_id)
    .populate("createdProjects")
    .populate("createdPosts")
    .then((user) => res.json(user))
    .catch((error) => res.json(error));
  });


    // Creates a new profile
router
      .post("/profile/new", (req, res) => {
      const {username, email, password, avatar, firstName, lastName, skills: [], interests: [], createdProjects: [], createdPosts: []} = req.body;
    User
      .create({username, email, password, avatar, firstName, lastName, skills: [], interests: [], createdProjects: [], createdPosts: []})
      .then((newUser) => res.json(newUser))
      .catch((error) => res.status(500).json({ error: "Failed to create post", details: error }));
});


    // Edits a specific user
router
    .put("/profile/:_id/edit", (req, res) => {
    const { _id } = req.params;
    const {username, email, password, avatar, firstName, lastName, skills: [], interests: [], createdProjects: [], createdPosts: []} = req.body; // Retrieve data from req.body
    User
      .findByIdAndUpdate(_id, {username, email, password, avatar, firstName, lastName, skills: [], interests: [], createdProjects: [], createdPosts: []}, { new: true }) // { new: true } returns the updated post  COMMENTS AQUI
      .then((updatedPost) => {
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
          }
            res.json(updatedPost)}) // Send the updated post as JSON response)
      .catch((error) => res.status(500).json({ error: "Failed to update post", details: error }));
});


module.exports = router;