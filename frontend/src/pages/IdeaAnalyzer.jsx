import { useState } from "react";


function IdeaAnalyzer() {


  const [idea, setIdea] = useState("");

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);



  const analyzeIdea = async () => {


    if (!idea.trim()) {

      alert("Please enter your startup idea.");

      return;

    }


    setLoading(true);

    setResult(null);



    try {


      const response = await fetch(
        "http://localhost:5000/analyze",
        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },


          body: JSON.stringify({

            idea: idea

          })

        }

      );



      const data = await response.json();


      setResult(data);



    } catch (error) {


      setResult({

        error:
        "Cannot connect to AI server"

      });


    }


    setLoading(false);


  };



  return (

    <section className="tool-page">


      <h1>
        AI Idea Analyzer
      </h1>


      <p>
        Transform your startup idea into a complete business analysis.
      </p>



      <textarea

        placeholder="Describe your startup idea..."

        value={idea}

        onChange={(e)=>setIdea(e.target.value)}

      />



      <button

        className="primary-btn"

        onClick={analyzeIdea}

      >

        {

          loading

          ? "Analyzing..."

          : "Analyze With AI"

        }


      </button>




      {

        result && (

          <div className="analysis-result">


            <h2>
              Analysis Result
            </h2>


            <pre>

              {JSON.stringify(result,null,2)}

            </pre>


          </div>

        )

      }



    </section>

  );

}


export default IdeaAnalyzer;
