const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());



app.post("/analyze", (req, res) => {

    const { idea } = req.body;


    const result = {

        score: "85/100",

        summary:
        "Your idea shows good business potential.",

        customers:
        "Potential customers identified.",

        strengths:
        "Innovation and scalability.",

        challenges:
        "Competition and execution."

    };


    res.json(result);

});



app.listen(5000, () => {

    console.log("AI Backend running on port 5000");

});
