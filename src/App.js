import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVDownload from "./components/CVDownload";
import LampComponent from "./components/LampComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <LampComponent/>
      <Projects />
      <CVDownload />
      <Contact />
    </div>
  );
}

export default App;
