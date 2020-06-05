import React from 'react'
import cssIcon from '../img/css-icon.png'
import htmlIcon from '../img/html-icon.png'
import javaScriptIcon from '../img/javascript-icon.png'
import reactIcon from '../img/react-icon.png'
import postgresIcon from '../img/postgresIcon.png'
import sqlIcon from '../img/sqlIcon.png'
import railsIcon from '../img/railsIcon.png'
import rubyIcon from '../img/rubyIcon.png'
import myPic from '../img/homepic.jpeg'
import '../styles/Skills.css'

const Skills = () =>{
    return(
    <div className='skills'>
    <img src={myPic} alt='homePic' className='homePic'/>
    <div className='images'>
    <img src={cssIcon} alt='cssIcon' className='imageOne'/>
    <img src={htmlIcon} alt='htmlIcon' className='imageTwo'/>
    <img src={javaScriptIcon} alt='javaScriptIcon' className='imageThree'/>
    <img src={reactIcon} alt='reactIcon' className='imageFour'/>
    <img src={postgresIcon} alt='reactIcon' className='imageFive'/>
    <img src={railsIcon} alt='reactIcon' className='imageSix'/>
    <img src={sqlIcon} alt='reactIcon' className='imageSeven'/>
    <img src={rubyIcon} alt='rubyIcon' className='imageEight'/>
    </div>
    </div>
    )
}

export default Skills 