const { Schema, model } = require("mongoose");
const { fileSchema } = require("./File.model");
const { contributorSchema } = require("./Contributor.model");

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    files: {          // Embed an array of file documents [fileSchema] LATER SUBSTITUTE
      type: String,
      required: true,
    },  
    contributors: {     // Embed an array of contributor documents [contributorSchema] LATER SUBSTITUTE
      type: String,
      required: true,
    }, 
    // Add more fields as needed, e.g., project owner, date created, etc.
  });

const Project = model('Project', projectSchema);

module.exports = Project;