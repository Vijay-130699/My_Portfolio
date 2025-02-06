import React from 'react'
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import Resume from './resume/resume';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Achievements from './achievements/achievements';
import { PortfolioContextProvider } from '../context/portfoliow-context';
const LandingPageComponent = () => {
    return (
        <React.Fragment>
          <PortfolioContextProvider>
            <Home />
            <About />
            <Resume />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
            </PortfolioContextProvider>
        </React.Fragment>
    )
}

export default LandingPageComponent