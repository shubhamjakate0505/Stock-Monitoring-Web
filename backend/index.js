require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const holdingsRoute = require("./routes/holdingsRoute");
const positionsRoute = require("./routes/positionsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(cors());
app.use(bodyParser.json());

app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/user", userRoute);
app.use("/orders", orderRoute);

app.listen(port, async () => {
  console.log(`App Is listening On ${port}`);
  await mongoose.connect(url).then(() => console.log("Connected To DB"));
});
