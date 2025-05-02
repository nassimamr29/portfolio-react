import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CVDownload from "./components/CVDownload";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <CVDownload />
      <Contact />
    </div>
  );
}

export default App;
