const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require('path');
const fs = require('fs/promises');

const Project = require("../models/Project.model")
const User = require("../models/User.model")


    // Reads all projects
router
.get('/projects', (req, res) => {
    Project
    .find({})
    .then((response)=> res.json(response))
    .catch((error)=> res.json(error));
});


    // Reads a specific project
router
.get('/projects/:_id', (req, res) => {
    const {_id} = req.params; 
    Project
    .findById(_id)
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
  
});

    // Deletes a project
router
.delete('/projects/:_id', (req, res) => {
    const {_id} = req.params;

    Project.findByIdAndDelete(_id)
    .then(() => res.json({ message: 'Project deleted successfully' }))
    .catch((error) => res.json(error));
  
});

    // Uploads new project
    router.post('/projects/upload', (req, res) => {
        let resProject;
        const {fileName, saveDate, content, username, id} = req.body;
        Project.create({fileName, content, saveDate, username})
        .then((newProject) => {
          resProject = newProject; 
           return User.findByIdAndUpdate(id, {$push: {createdProjects: newProject._id}})
        })
        .then(() => {
          res.json(resProject);
      })
    });
  
  

module.exports = router;
