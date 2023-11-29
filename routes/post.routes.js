const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Post = require("../models/Post.model")


    // Reads all Posts - Homepage view
router.get("/api/posts", (req, res)=>{
    const {title} = req.body;

    Post
    .find({title})
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
});

    // Reads specific Post by Id, with it's content
router.get("/api/posts/:id", (req, res)=>{
    const {postId} = req.params;
    Post
    .findById(postId)
    .populate("bodyText")
    .then((post)=> res.json(post))
    .catch((error)=> res.json(error));
});

    // Creates a new post
router.post("/api/posts/new", (req, res)=>{
    const {title, bodyText, img} = req.body;

    Post
    .create({title, bodyText, img})
    .then((post)=> res.json(post))
    .catch((error)=> res.json(error))
});

    // Edits a specific post
router.put("/api/posts/:id", (req, res)=>{
    const {postId} = req.params;
    const {title, bodyText, img} = req.params;

    Post
    .findByIdAndUpdate(postId, {title, bodyText, img})
    .then(()=>{ res.json()
    .catch((error)=> res.json(error))
    })
});

    // Deletes a specific post
router.delete("/api/posts/:id", (req, res)=>{
    const {postId} = req.params;

    Post
    .findByIdAndDelete(postId)
    .then(()=>{ res.json()
    .catch((error)=> res.json(error))
    })
})


module.exports = router;