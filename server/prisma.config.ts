import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: "tsx ./seeds/index.ts"
  },
  datasource: {
    url: env("NETLIFY_DATABASE_URL"),
  },
});
