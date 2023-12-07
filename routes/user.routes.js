const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const multer = require("multer");

const User = require("../models/User.model")
const Post = require("../models/Post.model")
const Project = require("../models/Project.model")

// Set up Multer for handling file uploads
const storage = multer.memoryStorage(); // Store file data in memory as Buffer
const upload = multer({ storage: storage });

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
    router.put("/profile/:_id/edit", upload.single('avatar'), (req, res) => {
      const { _id } = req.params;
      const { username, email, password, firstName, lastName, skills, interests } = req.body;
    
      // Check if a file was uploaded
      const avatarData = req.file ? req.file.buffer : undefined;
    
      // Update the user with the new data, including the avatar
      User.findByIdAndUpdate(
        _id,
        { username, email, password, firstName, lastName, skills, interests, avatar: avatarData },
        { new: true }
      )
        .then((updatedUser) => {
          if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
          }
          res.json(updatedUser);
        })
        .catch((error) => res.status(500).json({ error: "Failed to update user", details: error }));
    });
    


module.exports = router;