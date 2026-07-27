import { Link } from "react-router-dom";


function Dashboard() {

  return (

    <section className="dashboard">


      <h1>
        RiyadNova AI Dashboard
      </h1>


      <p>
        Your AI Startup Command Center
      </p>



      <div className="dashboard-grid">


        <div className="dashboard-card">

          <h3>
            AI Idea Analyzer
          </h3>

          <p>
            Analyze your startup ideas using artificial intelligence.
          </p>


          <Link to="/idea-analyzer">
            Open Tool
          </Link>

        </div>



        <div className="dashboard-card">

          <h3>
            Business Analysis
          </h3>

          <p>
            Generate business insights and opportunities.
          </p>

        </div>



        <div className="dashboard-card">

          <h3>
            Market Research
          </h3>

          <p>
            Understand customers and market needs.
          </p>

        </div>



        <div className="dashboard-card">

          <h3>
            AI Reports
          </h3>

          <p>
            Create intelligent reports for your projects.
          </p>

        </div>



      </div>


    </section>

  );

}


export default Dashboard;
