import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

// import τα project pages
import ProjectA from "./ProjectA";
import ProjectB from "./ProjectB";
import ProjectC from "./ProjectC";
import ProjectD from "./ProjectD";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Αρχική σελίδα */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
              </>
            }
          />

          {/* Σελίδα Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Σελίδες Projects */}
          <Route path="/projects/a" element={<ProjectA />} />
          <Route path="/projects/b" element={<ProjectB />} />
          <Route path="/projects/c" element={<ProjectC />} />
          <Route path="/projects/d" element={<ProjectD />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
