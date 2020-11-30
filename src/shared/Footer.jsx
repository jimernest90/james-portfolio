import React from 'react'
import '../styles/Footer.css'



class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
    
  // }


  render() {
    return (
    <div className='footer' >
      <form name='contact' action='/contact' method='post'>
      <input type='hidden' name='form-name' value='contact'/>
        <p>
          <label>
            Your Name: <input required type='text' name='name' placeholder='Your name'/>
          </label>
        </p>
        <p>
          <label>
            Your Email: <input required type='email' name='email' placeholder='Your email'/>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea required name='message' placeholder='Message' cols='30' rows='10'></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>    
    );
  }
}
                            
export default Footer;