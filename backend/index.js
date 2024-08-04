require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

app.listen(port, async () => {
  console.log(`App Is listening On ${port}`);
  await mongoose.connect(url).then(() => console.log("Connected To DB"));
});
