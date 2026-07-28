import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "../data/riyadnova.db");

let db = null;

export async function initializeDatabase() {
  try {
      db = await open({
            filename: dbPath,
                  driver: sqlite3.Database,
                      });

                          await db.exec("PRAGMA foreign_keys = ON");

                              // Create Users Table
                                  await db.exec(`
                                        CREATE TABLE IF NOT EXISTS users (
                                                id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                        email TEXT UNIQUE NOT NULL,
                                                                password TEXT NOT NULL,
                                                                        name TEXT NOT NULL,
                                                                                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                                                                        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                                                                                              )
                                                                                                  `);

                                                                                                      // Create Ideas Table
                                                                                                          await db.exec(`
                                                                                                                CREATE TABLE IF NOT EXISTS ideas (
                                                                                                                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                                                                                user_id INTEGER NOT NULL,
                                                                                                                                        title TEXT NOT NULL,
                                                                                                                                                description TEXT NOT NULL,
                                                                                                                                                        analysis TEXT,
                                                                                                                                                                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                                        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
                                                                                                                                                                              )
                                                                                                                                                                                  `);

                                                                                                                                                                                      console.log("✅ Database initialized successfully");
                                                                                                                                                                                          return db;
                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                console.error("❌ Database initialization error:", error);
                                                                                                                                                                                                    throw error;
                                                                                                                                                                                                      }
                                                                                                                                                                                                      }

                                                                                                                                                                                                      export function getDatabase() {
                                                                                                                                                                                                        if (!db) {
                                                                                                                                                                                                            throw new Error("Database not initialized");
                                                                                                                                                                                                              }
                                                                                                                                                                                                                return db;
                                                                                                                                                                                                                }