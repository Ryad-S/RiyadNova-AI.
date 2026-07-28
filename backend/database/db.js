import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



const dbPath = path.join(
  __dirname,
    "riyadnova.db"
    );



    const db = await open({

      filename: dbPath,

        driver: sqlite3.Database

        });



        await db.exec(`

        CREATE TABLE IF NOT EXISTS users (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL,

        email TEXT UNIQUE NOT NULL,

        password TEXT NOT NULL,

        created_at DATETIME DEFAULT CURRENT_TIMESTAMP

        );

        `);



        console.log("Database connected successfully");



        export default db;