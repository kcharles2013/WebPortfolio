import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import IntroSection from "./IntroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Home(){
    const [ isOpen, setIsOpen ] = useState(false);

    const  toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle}/>
            <IntroSection />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    )
}

export default Home;