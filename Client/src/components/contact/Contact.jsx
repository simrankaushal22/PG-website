import React, { useRef } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import "./contact.css"


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wkf6m5d', 'template_agl59xb', form.current, {
        publicKey: 'bKchZ0oZNMUIgXyaq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
     

      <div className='container contact_container'>
        <div className='contact_options'>
          <div className="getintouch">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          </div>
       
          <article className='contact_option'>
            <div className="icoonnn">
            <MdEmail  className='myicon'/>
            <h5>simrankaushal374@gmail.com</h5>
            </div>
          
            <a href="mailto:simrankaushal374@gmail.com" target='_blank' rel="noopener noreferrer">send a message</a>
          </article>
          <article className='contact_option'>
          <div className="icoonnn">
          <FaPhoneAlt className='myicon' /> 
          <h5>+91 9015365617</h5>

            </div>
            {/* <BsWhatsapp className='contact_option-icon' /> */}
       
            <a href="https://api.whatsapp.com/send?phone=9015365617" target='_blank' rel="noopener noreferrer">send a message</a>
          </article>
        </div>

        {/* Contact form */}
        <div className="contactmeform">
        <form className='myform' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
        
      </div>
    </section>
  );
};


export default Contact



























































