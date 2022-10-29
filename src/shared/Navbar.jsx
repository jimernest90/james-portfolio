import React from 'react'
import '../styles/Navbar.css'
import mypic from '../img/homepic.jpeg'
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
    <img src={mypic} alt='profpic' className='profPic'/>
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
