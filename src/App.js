import Navbar from "./Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

import "./fonts/Alata-Regular.ttf";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{margin:'0px', marginTop:'5vh'}}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
