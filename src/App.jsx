import './styles.css';
import Layout from "./components/Layout.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import NoMatch from "./components/NoMatch.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

export const ProjectContext = createContext();

function App() {
  let myArray = [{ "id": 1, "title": "Mini-Project", "description": "Build a birdhouse" }, { "id": 2, "title": "Medium-Project", "description": "Build a doghouse" }];
  const [projects, setProjects] = useState(myArray);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/list' element={<Project />} />
              <Route path="/project/:pid" element={<ProjectForm />} />
              <Route path="/project" element={<ProjectForm />} />
              <Route path='/about' element={<About />} />
              <Route path='/' element={<Home />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ProjectContext.Provider>
  );
}

export default App;
