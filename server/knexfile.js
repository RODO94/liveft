import { configDotenv } from "dotenv";
import knex from "knex";
configDotenv();

export const knexConfig = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: "utf8",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

export const database = knex(knexConfig.development);
