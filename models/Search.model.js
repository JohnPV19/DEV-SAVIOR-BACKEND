const { Schema, model } = require("mongoose");

const postSchema = new Schema =(
  {
    text: {type: String, required: true, maxLength: 35}
  }
)

const Search = model("Search", searchSchema);

module.exports = Search;