import express from "express";
import cors from "cors";


const app = express();

const PORT = process.env.PORT || 5000;


// Middleware

app.use(
  cors({
      origin: "*"
        })
        );

        app.use(express.json());



        // Health Check

        app.get("/", (req, res) => {

          res.json({

              status: "success",

                  message: "RiyadNova AI Backend Running",

                      version: "1.0.0"

                        });

                        });




                        // AI Idea Analyzer API

                        app.post("/api/ai/analyze", (req, res) => {


                          try {


                              const { idea } = req.body;



                                  if (!idea || idea.trim() === "") {


                                        return res.status(400).json({

                                                status: "error",

                                                        message: "Idea is required"

                                                              });


                                                                  }



                                                                      const analysis = {


                                                                            idea,


                                                                                  businessScore: 85,


                                                                                        marketPotential:
                                                                                                "High potential digital AI product opportunity",



                                                                                                      targetAudience: [

                                                                                                              "Students",

                                                                                                                      "Entrepreneurs",

                                                                                                                              "Businesses"

                                                                                                                                    ],



                                                                                                                                          strengths: [

                                                                                                                                                  "AI automation",

                                                                                                                                                          "Scalable solution",

                                                                                                                                                                  "Digital market"

                                                                                                                                                                        ],



                                                                                                                                                                              risks: [

                                                                                                                                                                                      "Competition",

                                                                                                                                                                                              "Customer acquisition",

                                                                                                                                                                                                      "Development cost"

                                                                                                                                                                                                            ],



                                                                                                                                                                                                                  recommendation:

                                                                                                                                                                                                                          "Develop MVP and validate with early users"



                                                                                                                                                                                                                              };



                                                                                                                                                                                                                                  res.json({

                                                                                                                                                                                                                                        status: "success",

                                                                                                                                                                                                                                              data: analysis

                                                                                                                                                                                                                                                  });



                                                                                                                                                                                                                                                    } catch (error) {


                                                                                                                                                                                                                                                        res.status(500).json({

                                                                                                                                                                                                                                                              status: "error",

                                                                                                                                                                                                                                                                    message: error.message

                                                                                                                                                                                                                                                                        });


                                                                                                                                                                                                                                                                          }


                                                                                                                                                                                                                                                                          });





                                                                                                                                                                                                                                                                          app.listen(PORT, () => {


                                                                                                                                                                                                                                                                            console.log(

                                                                                                                                                                                                                                                                                `RiyadNova AI Backend running on port ${PORT}`

                                                                                                                                                                                                                                                                                  );


                                                                                                                                                                                                                                                                                  });