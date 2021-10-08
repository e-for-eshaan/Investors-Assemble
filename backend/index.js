// module imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//file imports

// app
const app = express();
//middlewares
dotenv.config();
app.use(express.json());

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
