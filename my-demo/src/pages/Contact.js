import React from 'react';
import Image33 from '../assets/image33.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FaceBookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div
        className='leftSide'
        style={{ backgroundImage: `url(${Image33})`}}
        >
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <div className='contactIcon'>
          <InstagramIcon/>
          <TwitterIcon/>
          <FaceBookIcon/>
          <LinkedInIcon/>
        </div>

            <form id="contact-form" method="POST">
               
                <label htmlFor="message">Message</label>
                <textarea 
                rows="1"
                placeholder='Enter message...' 
                name="message" 
                required
                > 
                </textarea>
                <button type="Submit">Send Message</button>


            </form>
        </div>
      
    </div>
  )
}

export default Contact
