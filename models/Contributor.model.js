const { Schema, model } = require("mongoose");

const contributorSchema = new Schema(
    {
    username: {
      type: String,
      required: true,
    },
    // Add more contributor details as needed, e.g., role, permissions, etc.
  });

const Contributor = model('Contributor', contributorSchema);

module.exports = {Contributor, contributorSchema};