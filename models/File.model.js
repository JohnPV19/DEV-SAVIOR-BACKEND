const { Schema, model } = require("mongoose");

const fileSchema = new Schema(
    {
    fileName: {
      type: String,
      // No longer required as it's automatically extracted
    },
    fileType: {
      type: String,
      // No longer required as it's automatically extracted
    },
    content: {
      type: String,
      required: true,
    },
    // Add more fields as needed, e.g., file size, date created, etc.
  });

const File = model('File', fileSchema);

module.exports = {File, fileSchema};