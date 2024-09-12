// app.js
const express = require("express");
const app = express();
const movieRouter = require("./routes/movieRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", movieRouter);
app.use(express.static('public'));

module.exports = app;