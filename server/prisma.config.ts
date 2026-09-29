import "dotenv/config";
import { defineConfig } from "prisma/config";
import { getMigrateDatabaseUrl } from "./prisma/dbUrl";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: getMigrateDatabaseUrl(),
  },
});
