import { useState } from 'react'

function Dashboard() {

  const [idea, setIdea] = useState('')

  const analyzeIdea = () => {

    if (!idea.trim()) {
      alert('Please enter your startup idea.')
      return
    }

    alert('AI Analysis will be connected in the next step.')
  }

  return (

    <section className="dashboard">

      <h1>RiyadNova AI Dashboard</h1>

      <p>Your AI Startup Command Center</p>

      <div className="idea-analyzer">

        <textarea
          placeholder="Describe your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <br />

        <button onClick={analyzeIdea}>
          Analyze with AI
        </button>

      </div>

    </section>

  )

}

export default Dashboard
