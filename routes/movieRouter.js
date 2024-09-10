// routes/movieRouter.js
const { Router } = require("express");
const movieController = require("../controllers/movieController");
const movieRouter = Router();

movieRouter.get("/", movieController.getMovies);
movieRouter.get("/search", movieController.searchMovies);
movieRouter.get("/new", movieController.createMovieGet);
movieRouter.post("/new", movieController.createMoviePost);
movieRouter.get("/delete", movieController.deleteMovies);

module.exports = movieRouter;
