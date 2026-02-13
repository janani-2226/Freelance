import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage.jsx";
import ProjectsOverview from "./Pages/Overview.jsx";
import ProjectDetail from "./Pages/Projectdetail.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsOverview />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
