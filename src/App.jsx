import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services";
import Process from "./pages/Process";
import ProjectIntake from "./pages/ProjectIntake";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Needs to be inside Router, but outside Routes */}
      <Layout>
        {/* Added the page-transition class here for a smooth fade-in */}
        <div className="page-transition">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/start" element={<ProjectIntake />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
