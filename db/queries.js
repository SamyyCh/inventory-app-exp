const pool = require("./pool");
const axios = require("axios");

async function getAllMovies() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function insertMovie(movie) {
  try {
    const apiKey = "1b2cc0921b8f64dd88ebc1b7ad95b6c5";
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movie.title)}`);
    
    let posterPath = null;
    if (response.data.results && response.data.results.length > 0) {
      posterPath = response.data.results[0].poster_path;
    }

    await pool.query(
      "INSERT INTO inventory (title, director, genre, actor, year, poster) VALUES ($1, $2, $3, $4, $5, $6)",
      [movie.title, movie.director, movie.genre, movie.actor, movie.year, posterPath]
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

async function searchMovies({ title, director, genre, actor, year }) {
  let query = "SELECT * FROM inventory WHERE 1=1";
  const values = [];

  if (title) {
    query += " AND title ILIKE $1";
    values.push(`%${title}%`);
  }
  if (director) {
    query += " AND director ILIKE $" + (values.length + 1);
    values.push(`%${director}%`);
  }
  if (genre) {
    query += " AND genre ILIKE $" + (values.length + 1);
    values.push(`%${genre}%`);
  }
  if (actor) {
    query += " AND actor ILIKE $" + (values.length + 1);
    values.push(`%${actor}%`);
  }
  if (year) {
    query += " AND year = $" + (values.length + 1);
    values.push(year);
  }

  const { rows } = await pool.query(query, values);
  return rows;
}

async function removeMovie(id) {
  await pool.query("DELETE FROM inventory WHERE id = $1", [id]);
}

async function removeAllMovies() {
  await pool.query("DELETE FROM inventory");
}

async function getMovieById(id) {
  const { rows } = await pool.query("SELECT * FROM inventory WHERE id = $1", [id]);
  return rows[0];
}

async function updateMovie(id, movie) {
  const { title, director, genre, actor, year } = movie;
  await pool.query(
    "UPDATE inventory SET title = $1, director = $2, genre = $3, actor = $4, year = $5 WHERE id = $6",
    [title, director, genre, actor, year, id]
  );
}

module.exports = {
  getAllMovies,
  insertMovie,
  searchMovies,
  removeMovie,
  removeAllMovies,
  getMovieById,
  updateMovie
};