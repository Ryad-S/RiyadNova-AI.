import { Link } from "react-router-dom";


function Home() {

  return (

    <div className="home-page">


      <h1>
        RiyadNova AI
      </h1>


      <h2>
        Transform Ideas Into Intelligent Businesses
      </h2>


      <p>
        An AI platform that helps students and entrepreneurs
        analyze ideas and build smarter projects.
      </p>



      <div className="home-buttons">


        <Link to="/dashboard">
          Open Dashboard
        </Link>


        <Link to="/idea-analyzer">
          Analyze Idea
        </Link>


      </div>


    </div>

  );

}


export default Home;
