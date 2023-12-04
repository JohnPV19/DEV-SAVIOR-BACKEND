const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  fileName: {
    type: String,
    required: true,
  },
  saveDate: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String 
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
