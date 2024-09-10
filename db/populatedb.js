#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 )
);

INSERT INTO inventory (movie) 
VALUES
  ('Midnight In Paris'),
  ('How To Lose A Guy In 10 Days'),
  ('LaLaLand');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://samy:***@localhost:5432/inventory",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
