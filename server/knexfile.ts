import type { Knex } from "knex";
import { configDotenv } from "dotenv";

const { parsed } = configDotenv();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: parsed?.DB_HOST,
      database: parsed?.DB_NAME,
      user: parsed?.DB_USER,
      password: parsed?.DB_PASSWORD,
      charset: "utf8",
    },
  },
};

export default knexConfig;
