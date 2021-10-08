const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// create a post
router.post("/create", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    // returning new created post
    return res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all posts
router.get("/all", async (req, res) => {
  try {
    // fetching posts from db and sorting it
    const posts = await Post.find({}).sort({ createdAt: "desc" });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a user's all posts
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    // fetching and sorting
    const userPosts = await Post.find({ userId: user._id }).sort({
      createdAt: "desc",
    });
    return res.status(200).json(userPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const userPost = await Post.findById(req.params.id);
    if (userPost.userId === req.body.userId) {
      await userPost.updateOne({ $set: req.body });
      return res.status(200).json("POST IS UPDATED");
    } else {
      return res.status(403).json("You can update only your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const userPost = await Post.findById(req.params.id);
    if (userPost.userId === req.body.userId) {
      await userPost.deleteOne();
      res.status(200).json("POST IS DELETED");
    } else {
      res.status(403).json("You can delete only your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
