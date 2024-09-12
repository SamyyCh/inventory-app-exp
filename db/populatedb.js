#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR (255),
  director VARCHAR (255),
  genre VARCHAR (255),
  actor VARCHAR (255),
  year VARCHAR (4),
  poster VARCHAR (255)
);

INSERT INTO inventory (title, director, genre, actor, year, poster) 
VALUES
  ('Midnight In Paris', 'Woody Allen', 'Romantic Comedy', 'Owen Wilson', '2011', 'https://image.tmdb.org/t/p/w500/4wBG5kbfagTQclETblPRRGihk0I.jpg'),
  ('Deadpool', 'Tim Miller', 'Comedy/Action', 'Ryan Reynolds', '2016', 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg'),
  ('Deadpool & Wolverine', 'Shawn Levy', 'Comedy/Action', 'Ryan Reynolds', '2024', 'https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg'),
  ('Inception', 'Christopher Nolan', 'Sci-fi/Action', 'Leonardo DiCaprio', '2010', 'https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg'),
  ('LaLaLand', 'Damien Chazelle', 'Musical', 'Ryan Gosling', '2016', 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:XjFQohENhWGziwAqGaYrAgMbsHJoKpZR@junction.proxy.rlwy.net:46635/railway",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
