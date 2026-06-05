import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./features/Header/Header.jsx";
import Main from "./features/Main/Main.jsx";
import SEO from "./features/SEO/SEO.jsx";
import Writing from "./features/Writing/Writing.jsx";
import About from "./features/About/About.jsx";
import Footer from "./features/Footer/Footer.jsx";

// import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState("");

  const handleClick = (page) => {
    setIsActive(page);
  };

  return (
    <div className="app">
      <Header handleClick={handleClick} isActive={isActive} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/seo" element={<SEO />}></Route>
        <Route path="/writing" element={<Writing />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
