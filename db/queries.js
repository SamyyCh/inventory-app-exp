const pool = require("./pool");

async function getAllMovies() {
  const { rows } = await pool.query("SELECT * FROM inventory");
  return rows;
}

async function insertMovie(movie) {
  await pool.query("INSERT INTO inventory (title, year) VALUES ($1, $2)", [movie.title, movie.year]);
}

async function searchMovie(search) {
  const { rows } = await pool.query(
    "SELECT * FROM inventory WHERE title LIKE $1",
    [`%${search}%`]
  );
  return rows;
}

async function removeMovie() {
  await pool.query("DELETE FROM inventory");
}

module.exports = {
  getAllMovies,
  insertMovie,
  searchMovie,
  removeMovie
};
