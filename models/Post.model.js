const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  bodyText: { type: String, required: true, maxLength: 800 },
  img: { type: String },
  username: {
    type: String 
  },
});

const Post = model("Post", postSchema);

module.exports = Post;