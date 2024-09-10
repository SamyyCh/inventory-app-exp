// controllers/movieController.js

const db = require("../db/queries");

async function getMovies(req, res) {
  const movies = await db.getAllMovies();
  res.render("index", { movies });
}

async function createMovieGet(req, res) {
  res.render("form");
}

async function createMoviePost(req, res) {
  const { title, director, genre, actor, year } = req.body;
  const movie = { title, director, genre, actor, year };
  await db.insertMovie(movie);
  res.redirect("/");
}

async function deleteMovie(req, res) {
  const movieId = req.params.id;
  await db.removeMovie(movieId);
  res.redirect("/");
}

async function deleteMovies(req, res) {
  await db.removeAllMovies();
  res.redirect("/");
}

async function searchMovies(req, res) {
  const { movie } = req.query;
  const searchResults = await db.searchMovie(movie);
  res.send("Search results: " + searchResults.map(movie => movie.title).join(", "));
}

async function updateMovieGet(req, res) {
  const movieId = req.params.id;
  const movie = await db.getMovieById(movieId);

  if (movie) {
    res.render("updateMovie", { movie });
  } else {
    res.status(404).send("Movie not found");
  }
}

async function updateMoviePost(req, res) {
  const movieId = req.params.id;
  const { title, director, genre, actor, year } = req.body;

  await db.updateMovie(movieId, { title, director, genre, actor, year });

  res.redirect("/");
}

module.exports = {
  getMovies,
  createMovieGet,
  createMoviePost,
  deleteMovie,
  deleteMovies,
  searchMovies,
  updateMovieGet,
  updateMoviePost
};