import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

// Project pages
import ProjectA from "./ProjectA";
import ProjectB from "./ProjectB";
import ProjectC from "./ProjectC";
import ProjectD from "./ProjectD";
import ProjectE from "./ProjectE";
import ProjectF from "./ProjectF"; // ✅ NEW

import Blog from "./Blog";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>

          {/* Home Page */}
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

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />

          {/* Project Pages */}
          <Route path="/projects/a" element={<ProjectA />} />
          <Route path="/projects/b" element={<ProjectB />} />
          <Route path="/projects/c" element={<ProjectC />} />
          <Route path="/projects/d" element={<ProjectD />} />
          <Route path="/projects/e" element={<ProjectE />} />
          <Route path="/projects/f" element={<ProjectF />} /> {/* ✅ NEW */}

          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;