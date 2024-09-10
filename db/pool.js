const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "samy",
  database: "samy",
  password: "***",
  port: 5432
});

module.exports = pool;