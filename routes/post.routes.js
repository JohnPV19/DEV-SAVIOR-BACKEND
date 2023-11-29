const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Post = require("../models/Post.model")


    // Reads all Posts - Homepage view
router.get("/posts", (req, res)=>{
    Post
    .find({})
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
});

    // Reads specific Post by Id, with it's content
    router.get("/posts/:id", (req, res) => {
        const { id } = req.params; // Correct variable name should match the route parameter
    Post
    .findById(id)
    .populate("bodyText")
    .then((post) => res.json(post))
    .catch((error) => res.json(error));
});

    // Creates a new post
router.post("/posts/new", (req, res)=>{
    const {title, bodyText, img} = req.body;

    Post
    .create({title, bodyText, img})
    .then((post)=> res.json(post))
    .catch((error)=> res.json(error))
});

    // Edits a specific post
router.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, bodyText, img } = req.body; // Retrieve data from req.body
        
    Post
    .findByIdAndUpdate(id, { title, bodyText, img }, { new: true }) // { new: true } returns the updated post
    .then((updatedPost) => res.json(updatedPost)) // Send the updated post as JSON response)
    .catch((error) => res.status(500).json({ error: "Failed to update post", details: error }));
});

    // Deletes a specific post
router.delete("/posts/:id", (req, res) => {
    const { id } = req.params;

    Post.findByIdAndDelete(id)
    .then(() => res.json({ message: 'Post deleted successfully' }))
    .catch((error) => res.json(error));
});



module.exports = router;