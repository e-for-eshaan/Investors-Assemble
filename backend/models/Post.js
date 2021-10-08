const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      max: 500,
    },
    img: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
