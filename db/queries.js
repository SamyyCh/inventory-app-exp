const pool = require("./pool");

async function getAllMovies() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function insertMovie(movie) {
  await pool.query("INSERT INTO inventory (title, director, genre, actor, year) VALUES ($1, $2, $3, $4, $5)", [movie.title, movie.director, movie.genre, movie.actor, movie.year]);
}

async function searchMovie(search) {
  const { rows } = await pool.query(
    "SELECT * FROM inventory WHERE title LIKE $1",
    [`%${search}%`]
  );
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
  searchMovie,
  removeMovie,
  removeAllMovies,
  getMovieById,
  updateMovie
};
