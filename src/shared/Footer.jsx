import React from 'react'
import '../styles/Footer.css'
import mailIcon from '../img/mailIcon.png'
import linkedinIcon from '../img/linkedinIcon.png'

const Footer = () => {
    return (
        <div className='footer'>
    <form name="contact" method="POST" data-netlify="true">
    <p>Contact Me:</p>
    <p><label> name: <input type="text" name="name" /> </label></p>
    <p><label> email: <input type="email" name="email" /></label></p>
    <p><label> message: <textarea name="message"></textarea></label></p>
    <button type="submit">Send</button> 
</form>
    </div>
                                )
                            }
                            
export default Footer;