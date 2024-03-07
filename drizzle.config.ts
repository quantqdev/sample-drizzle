import "dotenv/config";
import type { Config } from "drizzle-kit";
import { dbCredentials } from "./src/db";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials,
} satisfies Config;
