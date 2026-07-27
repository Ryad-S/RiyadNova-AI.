import { useState } from "react"


function IdeaAnalyzer() {

  const [idea, setIdea] = useState("")
  const [analysis, setAnalysis] = useState(false)


  const analyze = () => {

    if (!idea.trim()) {
      return
    }

    setAnalysis(true)

  }


  return (

    <section className="tool-page">

      <h1>
        🧠 AI Idea Analyzer
      </h1>


      <p>
        Transform your startup idea into a business analysis.
      </p>



      <textarea

        className="idea-input"

        placeholder="Write your startup idea here..."

        value={idea}

        onChange={(e) => setIdea(e.target.value)}

      />



      <button
        className="primary-btn"
        onClick={analyze}
      >

        Analyze With AI

      </button>




      {
        analysis && (

          <div className="analysis-grid">


            <div className="analysis-card">

              <h3>
                🚀 Idea Score
              </h3>

              <p>
                85/100 - Strong business potential
              </p>

            </div>



            <div className="analysis-card">

              <h3>
                🎯 Target Customers
              </h3>

              <p>
                Identified customer segments and needs.
              </p>

            </div>



            <div className="analysis-card">

              <h3>
                ✅ Strengths
              </h3>

              <p>
                Innovation, scalability and market opportunity.
              </p>

            </div>



            <div className="analysis-card">

              <h3>
                ⚠ Challenges
              </h3>

              <p>
                Competition and execution planning.
              </p>

            </div>


          </div>

        )

      }


    </section>

  )

}


export default IdeaAnalyzer
