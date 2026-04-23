import "./App.css";
import { Routes } from "react-router-dom";

import Header from "./features/Header/Header.jsx";
import Main from "./features/Main/Main.jsx";
import Footer from "./features/Footer/Footer.jsx";

// import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      {/*
      Pages go here:
      SEO
      Writing
      About
      */}
      <Footer />
    </div>
  );
}

export default App;
