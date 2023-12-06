const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    username: { 
      type: String, 
      required: true, 
      unique: true 
    },
    avatar: {
      type: String,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    skills: [{
      type: String,
      default: "",
    }],
    interests: [{
      type: String,
      default: "",
    }],
    createdPosts: [{
      type: Schema.Types.ObjectId, 
      ref: "Post",
    }],
    createdProjects: [{
      type: Schema.Types.ObjectId, 
      ref: "Project",
    }],
  });

const User = model("User", userSchema);

module.exports = User;
