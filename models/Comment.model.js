const { Schema, model } = require('mongoose');
const commentSchema = new Schema({
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
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;