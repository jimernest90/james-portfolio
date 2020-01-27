import React from 'react'
import '../styles/Footer.css'
import mailIcon from '../img/mailIcon.png'
import linkedinIcon from '../img/linkedinIcon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div id='footer' />
            <h2>Contact me :</h2><a href='mailto:jimernest90@yahoo.com'><img src={mailIcon} alt='mailIcon' className='email'/></a>
            <a href='https://www.linkedin.com/in/james-w-948a1774/' target="_blank"><img src={linkedinIcon} alt='linkedin' className='email'/></a>
    </div>
                                )
                            }
                            
export default Footer;