import "./App.css";
import { Routes } from "react-router-dom";

import Header from "./features/Header/Header.jsx";
import Main from "./features/Main/Main.jsx";
import SEO from "./features/SEO/SEO.jsx";
import Footer from "./features/Footer/Footer.jsx";

// import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      {/*<Main />*/}
      <SEO />
      {/*
      Pages go here:
      Writing
      About
      */}
      <Footer />
    </div>
  );
}

export default App;
