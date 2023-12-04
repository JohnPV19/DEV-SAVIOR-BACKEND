const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;