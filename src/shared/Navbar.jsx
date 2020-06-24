import React from 'react'
import '../styles/Navbar.css'
// import cssIcon from '../img/css-icon.png'
// import htmlIcon from '../img/html-icon.png'
// import javaScriptIcon from '../img/javascript-icon.png'
// import reactIcon from '../img/react-icon.png'

export default class Navbar extends React.Component {
    
    constructor(){
        super()
        this.state={}
    }
    render(){
    return(
    <div className= 'Navbar'>
    <img src='https://media.licdn.com/dms/image/C4D03AQE-TdcwSkWvtg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=Mfd90gJmgFryoO9K5rlx6vuNG7N6B7_HVO1LFw3_Qgw' alt='profpic' className='profPic'/>
    {/* <div className="flip-card">
    <div className="flip-card-inner">
    <div className="flip-card-front">
    <img src='https://media.licdn.com/dms/image/C4D03AQE-TdcwSkWvtg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=Mfd90gJmgFryoO9K5rlx6vuNG7N6B7_HVO1LFw3_Qgw' alt='mypic'/>
    </div>
    <div className="flip-card-back">
      <p>Software Engineer</p>
      <div className='images'>
      <img src={cssIcon} alt='cssIcon'/>
      <img src={htmlIcon} alt='htmlIcon'/>
      <img src={javaScriptIcon} alt='javaScriptIcon'/>
      <img src={reactIcon} alt='reactIcon'/>
      </div>
    </div> */}
  {/* </div>
    </div> */}
    <div className='navigation'>
    <h2>James White</h2>
    <ul>
       <a href='#about'><li>About James</li></a>
       <a href='#projects'><li>Projects</li></a> 
       <a href='#footer'><li>Contact Me</li></a>
    </ul>
    </div>
    </div>
    )
}
}
