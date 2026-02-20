import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import Process from "./pages/Process";
import ProjectIntake from './pages/ProjectIntake';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/start" element={<ProjectIntake />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
