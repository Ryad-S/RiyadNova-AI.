import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { initializeDatabase } from "./database/db.js";

dotenv.config();

const app = express();

// Security
app.use(helmet());

// CORS Configuration
app.use(
  cors({
      origin: ["http://localhost:5173", "http://localhost:3000"],
          credentials: true,
              methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
                  allowedHeaders: ["Content-Type", "Authorization"],
                    })
                    );

                    // Logging
                    app.use(morgan("dev"));

                    // JSON Parser
                    app.use(express.json({ limit: "10mb" }));
                    app.use(express.urlencoded({ extended: true, limit: "10mb" }));

                    // Initialize Database
                    await initializeDatabase();

                    // API Routes
                    app.use("/api/auth", authRoutes);

                    // AI Analysis Endpoint
                    app.post("/api/ai/analyze", async (req, res) => {
                      try {
                          const { idea } = req.body;

                              if (!idea || idea.trim() === "") {
                                    return res.status(400).json({
                                            status: "error",
                                                    message: "Idea is required",
                                                          });
                                                              }

                                                                  // Placeholder for AI analysis
                                                                      res.json({
                                                                            status: "success",
                                                                                  engine: "RiyadNova Intelligence Core",
                                                                                        result: {
                                                                                                idea,
                                                                                                        analysis: "AI analysis system ready for processing",
                                                                                                                timestamp: new Date().toISOString(),
                                                                                                                      },
                                                                                                                          });
                                                                                                                            } catch (error) {
                                                                                                                                console.error("AI Analysis Error:", error);
                                                                                                                                    res.status(500).json({
                                                                                                                                          status: "error",
                                                                                                                                                message: "Failed to analyze idea",
                                                                                                                                                    });
                                                                                                                                                      }
                                                                                                                                                      });

                                                                                                                                                      // Health Check
                                                                                                                                                      app.get("/", (req, res) => {
                                                                                                                                                        res.json({
                                                                                                                                                            status: "online",
                                                                                                                                                                name: "RiyadNova AI",
                                                                                                                                                                    version: "1.0.0",
                                                                                                                                                                        message: "Advanced AI Platform Backend Running",
                                                                                                                                                                            timestamp: new Date().toISOString(),
                                                                                                                                                                              });
                                                                                                                                                                              });

                                                                                                                                                                              // 404 Handler
                                                                                                                                                                              app.use((req, res) => {
                                                                                                                                                                                res.status(404).json({
                                                                                                                                                                                    status: "error",
                                                                                                                                                                                        message: "Route not found",
                                                                                                                                                                                          });
                                                                                                                                                                                          });

                                                                                                                                                                                          // Error Handler
                                                                                                                                                                                          app.use((error, req, res, next) => {
                                                                                                                                                                                            console.error("Error:", error);
                                                                                                                                                                                              res.status(error.status || 500).json({
                                                                                                                                                                                                  status: "error",
                                                                                                                                                                                                      message: error.message || "Internal Server Error",
                                                                                                                                                                                                        });
                                                                                                                                                                                                        });

                                                                                                                                                                                                        const PORT = process.env.PORT || 5000;

                                                                                                                                                                                                        app.listen(PORT, () => {
                                                                                                                                                                                                          console.log(`
                                                                                                                                                                                                          ================================
                                                                                                                                                                                                          🚀 RiyadNova AI Server Started
                                                                                                                                                                                                          PORT: ${PORT}
                                                                                                                                                                                                          STATUS: ONLINE
                                                                                                                                                                                                          ================================
                                                                                                                                                                                                            `);
                                                                                                                                                                                                            });