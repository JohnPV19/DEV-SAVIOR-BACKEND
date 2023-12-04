const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require('path');
const fs = require('fs/promises');

const Project = require("../models/Project.model")


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


    // Uploads a project 
/* router
.post('/projects/upload', (req, res) => {
    const {projectName, description, files, contributors} = req.body;

    Project
    .create({projectName, description, files, contributors })
    .then((project)=> res.json(project))
    .catch((error)=> res.json(error))
  
}); */


    // Deletes a project
router
.delete('/projects/:_id', (req, res) => {
    const { _id } = req.params;

    Project.findByIdAndDelete(_id)
    .then(() => res.json({ message: 'Project deleted successfully' }))
    .catch((error) => res.json(error));
  
});


    // Uploads content of uploaded files
    router.post('/projects/upload', async (req, res) => {
        try {
          const { fileName, saveDate, content, username } = req.body;

          // Save file details to MongoDB
          const newProject = new Project({
            fileName,
            content,
            saveDate,
            username,
          });
      
          const savedProject = await newProject.save();
      
          res.json(savedProject);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

module.exports = router;
