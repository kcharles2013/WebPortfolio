import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  const  toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="home-container">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle}/>
        <IntroSection />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
  );
}

export default App;
