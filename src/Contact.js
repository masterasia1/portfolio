import React from 'react'
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact= () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bjbirf', 'template_kfiwr87', form.current, 'sKa6js8oGzsOoKj0a')
      
    e.target.reset()

    
  };

  return (
   <section id='contact'>
     <h2>Get In Touch</h2>
     <br />

   
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required/>
         <input type='email' name='email' placeholder='Email' required />
         <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>

       </form>

   </section>
  )
}
