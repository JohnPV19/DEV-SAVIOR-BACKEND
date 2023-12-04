const { Schema, model } = require('mongoose');
const commentSchema = new Schema({
  saveDate: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
});
const Comment = model('Comment', commentSchema);
module.exports = Comment;