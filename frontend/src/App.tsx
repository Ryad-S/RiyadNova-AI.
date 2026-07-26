import Navbar from './components/Navbar'
import Features from './components/Features'

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <span className="badge">
            AI Co-Founder Platform
          </span>

          <h1>
            Build Your Startup
            <br />
            with Artificial Intelligence
          </h1>

          <p>
            RiyadNova AI transforms your ideas into real businesses using
            intelligent planning, market research, financial forecasting,
            and AI-powered startup building.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Building
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>

      </section>

      <Features />

    </>
  )
}

export default App
