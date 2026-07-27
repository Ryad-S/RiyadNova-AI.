import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());


// اختبار تشغيل السيرفر
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "RiyadNova AI Backend Running"
  });
});


// تحليل فكرة المشروع
app.post("/analyze", (req, res) => {

  const { idea } = req.body;


  if (!idea) {
    return res.status(400).json({
      error: "Idea is required"
    });
  }


  const analysis = {

    idea: idea,

    score: 85,

    summary:
      "This idea has potential and can be developed into a scalable AI business.",


    targetCustomers: [
      "Students",
      "Universities",
      "AI learners"
    ],


    strengths: [
      "Large digital market",
      "AI automation",
      "Scalable platform"
    ],


    challenges: [
      "Competition",
      "Marketing",
      "Continuous improvement"
    ]

  };


  res.json(analysis);

});


app.listen(PORT, () => {

  console.log(
    `RiyadNova AI Backend Running on port ${PORT}`
  );

});
