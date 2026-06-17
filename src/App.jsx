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

import RiddleOne from "./features/RiddleModals/riddles/RiddleOne.jsx";
import RiddleTwo from "./features/RiddleModals/riddles/RiddleTwo.jsx";
import RiddleThree from "./features/RiddleModals/riddles/RiddleThree.jsx";
import RiddleFour from "./features/RiddleModals/riddles/RiddleFour.jsx";
import RiddleFive from "./features/RiddleModals/riddles/RiddleFive.jsx";
import RiddleSix from "./features/RiddleModals/riddles/RiddleSix.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const onClose = () => {
    setActiveModal("");
  };

  const handleClick = (page) => {
    setActiveTab(page);
  };

  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onRiddleOneClick = () => {
    setActiveModal("riddle-one");
  };
  const onRiddleTwoClick = () => {
    setActiveModal("riddle-two");
  };
  const onRiddleThreeClick = () => {
    setActiveModal("riddle-three");
  };
  const onRiddleFourClick = () => {
    setActiveModal("riddle-four");
  };
  const onRiddleFiveClick = () => {
    setActiveModal("riddle-five");
  };
  const onRiddleSixClick = () => {
    setActiveModal("riddle-six");
  };

  return (
    <div className="app">
      <Header
        handleClick={handleClick}
        activeTab={activeTab}
        onRiddleClick={onRiddleOneClick}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleClick={handleClick}
              handleTopScroll={handleTopScroll}
              onRiddleClick={onRiddleSixClick}
            />
          }
        ></Route>

        {/* Here begin the Featured Project Pages */}
        <Route path="/psalter" element={<SimplePsalter />}></Route>
        <Route path="/msfr" element={<MSFR />}></Route>
        <Route path="/wtwr" element={<WTWR />}></Route>
        <Route path="/spots" element={<Spots />}></Route>

        {/* Here begin the Navigable Pages */}
        <Route
          path="/seo"
          element={<SEO onRiddleClick={onRiddleThreeClick} />}
        ></Route>
        <Route
          path="/writing"
          element={<Writing onRiddleClick={onRiddleFourClick} />}
        ></Route>
        <Route
          path="/about"
          element={<About onRiddleClick={onRiddleFiveClick} />}
        ></Route>
      </Routes>
      <Footer
        handleClick={handleClick}
        handleTopScroll={handleTopScroll}
        onRiddleClick={onRiddleTwoClick}
      />

      <RiddleOne isOpen={activeModal === "riddle-one"} onClose={onClose} />
      <RiddleTwo isOpen={activeModal === "riddle-two"} onClose={onClose} />
      <RiddleThree isOpen={activeModal === "riddle-three"} onClose={onClose} />
      <RiddleFour isOpen={activeModal === "riddle-four"} onClose={onClose} />
      <RiddleFive isOpen={activeModal === "riddle-five"} onClose={onClose} />
      <RiddleSix isOpen={activeModal === "riddle-six"} onClose={onClose} />
    </div>
  );
}

export default App;
