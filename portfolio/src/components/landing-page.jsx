import React from 'react'
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Resume from './resume/resume';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Achievements from './achievements/achievements';
const LandingPageComponent = () => {
    return (
        <React.Fragment>
            <Home />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
        </React.Fragment>
    )
}

export default LandingPageComponent