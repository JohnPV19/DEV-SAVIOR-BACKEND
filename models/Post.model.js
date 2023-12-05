const { Schema, model } = require("mongoose");
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50
  },
  bodyText: {
    type: String,
    required: true,
    maxLength: 800
  },
  img: {
    type: String
  },
  username: {
    type: String
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
  saveDate: {
    type: Date,
    default: Date.now,
  },
});
const Post = model("Post", postSchema);
module.exports = Post;