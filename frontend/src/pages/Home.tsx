import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Dashboard from '../components/Dashboard'
function Home() {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <h1>Build Your Startup with AI</h1>

        <h2>RiyadNova AI Co-Founder</h2>

        <p>
          RiyadNova AI helps entrepreneurs transform business ideas into
          successful companies using artificial intelligence, market research,
          financial planning, and intelligent business strategies.
        </p>

        <div className="hero-buttons">
          <button>Start Building</button>
          <button>Learn More</button>
        </div>
      </section>
      
      <Features />
      <Dashboard />
    </div>
  )
}

export default Home
