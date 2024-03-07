import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

if (!process.env.DB_HOST) {
  throw new Error("DB_HOST is missing in env");
}
if (!process.env.DB_PORT) {
  throw new Error("DB_PORT is missing in env");
}
if (!process.env.DB_USER) {
  throw new Error("DB_USER is missing in env");
}
if (!process.env.DB_PASSWORD) {
  throw new Error("DB_PASSWORD is missing in env");
}
if (!process.env.DB_NAME) {
  throw new Error("DB_NAME is missing in env");
}

export const dbCredentials = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const pool = new Pool(dbCredentials);

export const db = drizzle(pool);
