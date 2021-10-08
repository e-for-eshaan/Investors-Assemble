const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    isInvestor: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
  },
  {
    //to add 'created at'
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
