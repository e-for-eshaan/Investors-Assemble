// module imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//file imports
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
// const postRouter = require("./routes/posts");
// app
const app = express();
//middlewares
dotenv.config();
app.use(express.json());

// routing
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
// app.use("/api/posts", postRouter);

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
