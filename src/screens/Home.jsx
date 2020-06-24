import React from 'react'
import Layout from '../shared/Layout'
import About from '../screens/About'
import Projects from '../screens/Projects'
import '../styles/Home.css'
import messageFunction from '../shared/consoleMessage'
import githubIcon from '../img/GitHub-Mark-120px-plus.png'
import linkedinIcon from '../img/linkedinIcon.png'
import upArrow from '../img/up-arrow.png'
import Skills from '../screens/Skills'

const Home = () => {
    return(
    <div className='home'>
    <Layout>
        <br/>
        <div id='topSite'/>
        <a href='#topSite'><img src={upArrow} alt='upArrow' className='upArrow'/></a>
        <Skills/>
        <div id='about'/>
        <u><h4>About</h4></u>
        <About/>
        <div className='site-links'>
        <a href='https://www.linkedin.com/in/james-w-948a1774/' rel="noopener noreferrer" target="_blank"><img src={linkedinIcon} alt='linkedin' className='image'/></a>
        <a href='https://github.com/jimernest90' rel="noopener noreferrer" target="_blank"><img src={githubIcon} alt='github' className='image'/></a>
        </div>
        <div id='projects'/>
        <u><h4>Projects</h4></u>
        <Projects/>
        {messageFunction}
    </Layout>
    </div>
    )

}

export default Home