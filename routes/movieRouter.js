// routes/movieRouter.js
const { Router } = require("express");
const movieController = require("../controllers/movieController");
const movieRouter = Router();

movieRouter.get("/", movieController.getMovies);
movieRouter.get("/new", movieController.createMovieGet);
movieRouter.post("/new", movieController.createMoviePost);
movieRouter.get("/search", movieController.searchMovie);
movieRouter.get("/searchResult", movieController.searchMovieGet);
movieRouter.get("/edit/:id", movieController.updateMovieGet);
movieRouter.post("/edit/:id", movieController.updateMoviePost);
movieRouter.get("/delete/:id", movieController.deleteMovie);
movieRouter.post("/deleteShown", movieController.deleteMoviesShown);
movieRouter.post("/delete", movieController.deleteMovies);

module.exports = movieRouter;
