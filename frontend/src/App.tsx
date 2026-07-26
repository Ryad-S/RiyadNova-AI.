import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import Features from "./components/Features"

import Dashboard from "./pages/Dashboard"
import IdeaAnalyzer from "./pages/IdeaAnalyzer"
import MarketResearch from "./pages/MarketResearch"
import BusinessPlan from "./pages/BusinessPlan"
import FinancialAI from "./pages/FinancialAI"


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="app-layout">

        <Sidebar />


        <main className="main-content">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/idea-analyzer" element={<IdeaAnalyzer />} />

            <Route path="/market-research" element={<MarketResearch />} />

            <Route path="/business-plan" element={<BusinessPlan />} />

            <Route path="/financial-ai" element={<FinancialAI />} />


          </Routes>


        </main>


      </div>


    </BrowserRouter>

  )

}


export default App
