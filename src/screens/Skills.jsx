import React from 'react'
import cssIcon from '../img/css-icon.png'
import htmlIcon from '../img/html-icon.png'
import javaScriptIcon from '../img/javascript-icon.png'
import reactIcon from '../img/react-icon.png'
import postgresIcon from '../img/postgresIcon.png'
import sqlIcon from '../img/sqlIcon.png'
import railsIcon from '../img/railsIcon.png'
import rubyIcon from '../img/rubyIcon.png'
import '../styles/Skills.css'

const Skills = () =>{
    return(
    <div className='skills'>
    <img src='https://media.licdn.com/dms/ihttps://media-exp1.licdn.com/dms/image/C4D03AQEClb0HQdIlQg/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=_N4C6M6STAhBzMCUpkgw8jhOebYCW4rahBTg-jVnBMImage/C4D03AQE-TdcwSkWvtg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=Mfd90gJmgFryoO9K5rlx6vuNG7N6B7_HVO1LFw3_Qgw' alt='homePic' className='homePic'/>
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