import { configDotenv } from "dotenv";
const { parsed } = configDotenv();
const knexConfig = {
  development: {
    client: "mysql2",
    connection: {
      host: parsed.DB_HOST,
      database: parsed.DB_NAME,
      user: parsed.DB_USER,
      password: parsed.DB_PASSWORD,
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
export default knexConfig;
