const mongoose = require("mongoose");
const Schema = mongoose.Schema;

blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Schema defines the structure of the database, then we make a model based off of that schema.

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
