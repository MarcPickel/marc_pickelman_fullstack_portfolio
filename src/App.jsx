import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./features/Header/Header.jsx";
import Main from "./features/Main/Main.jsx";
import SEO from "./features/SEO/SEO.jsx";
import Writing from "./features/Writing/Writing.jsx";
import About from "./features/About/About.jsx";
import Footer from "./features/Footer/Footer.jsx";

import SimplePsalter from "./features/ProjectPages/components/Psalter.jsx";
import MSFR from "./features/ProjectPages/components/MSFR.jsx";
import WTWR from "./features/ProjectPages/components/WTWR.jsx";
import Spots from "./features/ProjectPages/components/Spots.jsx";

// import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState("");

  const handleClick = (page) => {
    setIsActive(page);
  };

  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Header handleClick={handleClick} isActive={isActive} />
      <Routes>
        <Route
          path="/"
          element={<Main handleTopScroll={handleTopScroll} />}
        ></Route>

        {/* Here begin the Featured Project Pages */}
        <Route path="/psalter" element={<SimplePsalter />}></Route>
        <Route path="/msfr" element={<MSFR />}></Route>
        <Route path="/wtwr" element={<WTWR />}></Route>
        <Route path="/spots" element={<Spots />}></Route>

        {/* Here begin the Navigable Pages */}
        <Route path="/seo" element={<SEO />}></Route>
        <Route path="/writing" element={<Writing />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer handleClick={handleClick} handleTopScroll={handleTopScroll} />
    </div>
  );
}

export default App;
