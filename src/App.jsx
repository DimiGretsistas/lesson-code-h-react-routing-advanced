import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPageDetails from "./pages/ProjectsPageDetails";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import { Routes, Route } from "react-router-dom";
import QueryStringExample from "./pages/QueryStringExample";

import projectsData from './projects-data.json';

import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects])


}

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}

        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPageDetails projects={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
