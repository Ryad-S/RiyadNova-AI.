import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Dashboard from '../components/Dashboard'
import DashboardLayout from '../components/DashboardLayout'
function Home() {
  return (
    <DashboardLayout>
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
        <DashboardLayout>
      </section>
      
      <Features />
      <Dashboard />
    <DashboardLayout>
  )
}

export default Home
