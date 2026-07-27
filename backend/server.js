import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());


// Test Route
app.get("/", (req, res) => {
  res.send("RiyadNova AI Backend Running");
});


// AI Analysis Route
app.post("/analyze", (req, res) => {

  const { idea } = req.body;


  if (!idea) {
    return res.status(400).json({
      error: "No idea provided"
    });
  }


  const analysis = {

    score: "85/100",

    summary:
      `Your startup idea "${idea}" has strong potential and can be developed into a scalable business.`,

    customers:
      "Students, professionals, and organizations looking for AI-powered solutions.",

    strengths:
      "Innovation, automation, scalability, and market opportunity.",

    challenges:
      "Competition, marketing strategy, and product development."

  };


  res.json(analysis);

});


// Server Start

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `AI Backend running on port ${PORT}`
  );

});
