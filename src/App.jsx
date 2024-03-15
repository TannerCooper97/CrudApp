import './styles.css';
import Layout from "./components/Layout.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import NoMatch from "./components/NoMatch.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

export const ProjectContext = createContext();

function App() {
  const [projects, setProjects] = useState([]);
  const [DBUpdated, setDBUpdated] = useState(false);

  useEffect(() => {
  fetch('api/projects', {
    method: "GET",
})
    .then((response) => {
        return response.json();
    })
    .then((resp) => {
        setProjects(resp);
        setDBUpdated(false);
    })
    .catch((err) => {
        // Code called when an error occurs during the request
        console.log(err.message);
    });
  }, [DBUpdated]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects, setDBUpdated }}>
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
