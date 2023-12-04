const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
    {
    username: {
      type: String,
      required: true,
    },
    // Add more contributor details as needed, e.g., role, permissions, etc.
  });

const Author = model('Author', authorSchema);

module.exports = {Author, authorSchema};