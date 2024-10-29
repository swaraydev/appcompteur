const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const filmRoutes = require("./routes/film");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/filmsdb");

app.use(bodyParser.json());
app.use("/api", filmRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
