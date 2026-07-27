import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import IdeaAnalyzer from "./pages/IdeaAnalyzer.jsx";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        <Route
          path="/idea-analyzer"
          element={<IdeaAnalyzer />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;
