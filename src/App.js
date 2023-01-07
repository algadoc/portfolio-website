import Navbar from "./Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import PerfectScrollbar  from 'react-perfect-scrollbar';

import AneuraiPage from "./pages/AneuraiPage" ; 
import SamuraiPage from "./pages/SamuraiPage";
import Test1Page from "./pages/Test1Page";
import Test2Page from "./pages/Test2Page";
import Test3Page from "./pages/Test3Page";
import Test4Page from "./pages/Test4Page";

import "./fonts/Alata-Regular.ttf";

function App() {
  return (
    <div style={{overflow:'hidden'}} >
      <Navbar />
      <PerfectScrollbar >
      <div className="container" style={{margin:'0px', marginTop:'5vh'}}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/portfolio/Aneurai" element={<AneuraiPage />} />
          <Route path="/portfolio/Samurai" element={<SamuraiPage />} />
          <Route path="/portfolio/Test1" element={<Test1Page />} />
          <Route path="/portfolio/Test2" element={<Test2Page />} />
          <Route path="/portfolio/Test3" element={<Test3Page />} />
          <Route path="/portfolio/Test4" element={<Test4Page />} />

        </Routes>
      </div>
      </PerfectScrollbar>
    </div>
  )
}

export default App
