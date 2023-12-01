const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Project = require("../models/Project.model")


    // Reads all projects
router.get('/projects', (req, res) => {
  
});


    // Reads a specific project
router.get('/projects/:_id', (req, res) => {
  
});


    // Uploads a project
router.get('/projects/upload', (req, res) => {
  
});


    // Deletes a project
router.get('/projects/:_id', (req, res) => {
  
});


module.exports = router;
