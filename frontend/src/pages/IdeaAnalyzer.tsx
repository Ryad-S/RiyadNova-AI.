function IdeaAnalyzer() {
  return (
    <div className="idea-analyzer">
      <h1>AI Idea Analyzer</h1>

      <p>
        Describe your startup idea and let RiyadNova AI analyze it.
      </p>

      <textarea
        placeholder="Describe your business idea..."
        rows={8}
      />

      <br />

      <button>Analyze Idea</button>
    </div>
  )
}

export default IdeaAnalyzer
