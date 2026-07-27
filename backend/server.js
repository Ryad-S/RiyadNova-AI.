import express from "express";
import cors from "cors";

import "./database/db.js";

import authRoutes from "./routes/auth.routes.js";


const app = express();

const PORT = process.env.PORT || 5000;



// Middleware

app.use(
  cors({
      origin: "*"
        })
        );


        app.use(express.json());



        // Test API

        app.get("/", (req, res) => {

          res.json({

              status: "success",

                  message: "RiyadNova AI Backend Running",

                      version: "1.0.0"

                        });

                        });



                        // Authentication Routes

                        app.use(
                          "/api/auth",
                            authRoutes
                            );




                            // Start Server

                            app.listen(PORT, () => {

                              console.log(
                                  `RiyadNova AI Backend running on port ${PORT}`
                                    );

                                    });