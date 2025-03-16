import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv'

dotenv.config({
    path: './.env.local'
})

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: './src/db/migrations',
    dbCredentials: {
        url: String(process.env.XATA_DATABASE_URL)
    }
});
