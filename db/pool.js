const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "samy",
  database: "samy",  // Your database name is "samy" not "inventory"
  password: "***",
  port: 5432
});

module.exports = pool;