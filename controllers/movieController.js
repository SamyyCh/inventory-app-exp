// controllers/movieController.js

const db = require("../db/queries");

async function getMovies(req, res) {
  const movies = await db.getAllMovies();
  res.send("Movies: " + movies.map(movie => movie.title).join(", "));
};

async function createMovieGet(req, res) {
  res.render("form");
}

async function createMoviePost(req, res) {
  const { movie } = req.body;
  await db.insertMovie(movie);
  res.redirect("/");
}

async function deleteMovies(req, res) {
  const movies = await db.getAllMovies();
  await db.removeMovie(movies)
  res.redirect("/");
}

async function searchMovies(req, res) {
  const { movie } = req.query;
  const searchResults = await db.searchMovie(movie);
  res.send("Search results: " + searchResults.map(movie => movie.title).join(", "));
}

module.exports = {
  getMovies,
  createMovieGet,
  createMoviePost,
  deleteMovies,
  searchMovies
};