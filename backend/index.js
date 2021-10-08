// module imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//file imports

// app
const app = express();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend Server is running on Port ${process.env.PORT || 5000}.`);
});
