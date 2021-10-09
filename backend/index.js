// module imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
//file imports
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/posts");

// app
const app = express();

//middlewares
app.use("/images", express.static(path.join(__dirname, "public/images")));

dotenv.config();
app.use(express.json());

// routing
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

// multer file uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Image Uploaded Successfully!");
  } catch (err) {
    console.log(err);
  }
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("--DB Connected.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend Server is running on Port ${process.env.PORT || 5000}.`);
});
