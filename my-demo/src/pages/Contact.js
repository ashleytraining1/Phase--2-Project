import React from 'react';
import Image33 from '../assets/image33.jpg';
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
