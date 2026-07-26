import { Link } from "react-router-dom"


function Sidebar() {

  return (

    <aside className="sidebar">

      <h2>
        RiyadNova AI
      </h2>


      <nav>

        <Link to="/">
          🏠 Dashboard
        </Link>


        <Link to="/idea-analyzer">
          🧠 Idea Analyzer
        </Link>


        <Link to="/market-research">
          📊 Market Research
        </Link>


        <Link to="/business-plan">
          💼 Business Plan
        </Link>


        <Link to="/financial-ai">
          💰 Financial AI
        </Link>


      </nav>


    </aside>

  )

}


export default Sidebar
