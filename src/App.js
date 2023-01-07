import Navbar from "./Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes, Navigate} from "react-router-dom";
import PerfectScrollbar  from 'react-perfect-scrollbar';
import Footer from './components/Footer'

import AneuraiPage from "./pages/AneuraiPage"; 
import AstrobeeprojectproposalPage from "./pages/AstrobeeprojectproposalPage";
import FesteravionicsPage from "./pages/FesteravionicsPage";
import IgnitionboardPage from "./pages/IgnitionboardPage";
import LumiaPage from "./pages/LumiaPage";
import MaterialgirlflightcomputerPage from "./pages/MaterialgirlflightcomputerPage";
import MisterblueskyPage from "./pages/MisterblueskyPage";
import MotormanufacturingPage from "./pages/MotormanufacturingPage";
import AgilearchitecturesreportPage from "./pages/AgilearchitecturesreportPage";
import SamuraiPage from "./pages/SamuraiPage";
import SustainerbaydesignPage from "./pages/SustainerbaydesignPage";
import TorsiontestingjigPage from "./pages/TorsiontestingjigPage";

import "./fonts/Alata-Regular.ttf";

function App() {
  return (
    <div style={{overflow:'hidden'}} >
      <Navbar />
      <PerfectScrollbar >
      <div className="container" style={{margin:'0px', marginTop:'5vh', minHeight:'69.4vh'}}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/portfolio/Aneurai" element={<AneuraiPage />} />
          <Route path="/portfolio/Astrobeeprojectproposal" element={<AstrobeeprojectproposalPage />} />
          <Route path="/portfolio/Festeravionics" element={<FesteravionicsPage />} />
          <Route path="/portfolio/Ignitionboard" element={<IgnitionboardPage />} />
          <Route path="/portfolio/Lumia" element={<LumiaPage />} />
          <Route path="/portfolio/Materialgirlflightcomputer" element={<MaterialgirlflightcomputerPage />} />
          <Route path="/portfolio/Misterbluesky" element={<MisterblueskyPage />} />
          <Route path="/portfolio/Motormanufacturing" element={<MotormanufacturingPage />} />
          <Route path="/portfolio/Agilearchitecturesreport" element={<AgilearchitecturesreportPage />} />
          <Route path="/portfolio/Samurai" element={<SamuraiPage />} />
          <Route path="/portfolio/Sustainerbaydesign" element={<SustainerbaydesignPage />} />
          <Route path="/portfolio/Torsiontestingjig" element={<TorsiontestingjigPage />} />

          <Route path="" element={<Navigate to="/about" />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </div>
      </PerfectScrollbar>
      <Footer />
    </div>
  )
}

export default App
