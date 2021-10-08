const router = require("express").Router();
const User = require("../models/User");

// get a user using id params
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    !user && res.status(404).json("NOT FOUND");

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// get all users in DB
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can delete only your account");
  }
});

// updating user's details
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      //if password is to be changed encrypt it
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    // update user in db
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your account");
  }
});

module.exports = router;
