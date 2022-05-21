import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
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

     <div className='container contact_container'>
       <div className='contact_options'>
         <article className='contact_option'>
           <MdOutlineMail className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>a.mayfield18@gmail.com</h5>
           <a href='mailto:a.mayfield18@gmail.com'> Send a message</a>
         </article>
         <article className='contact_option'>
           <RiMessengerLine className='contact_option-icon' />
           <h4>Messenger</h4>
           <h5>Asia Mayfield</h5>
           <a href='https://m.me/the.biggest.continent'>Send a message</a>
         </article>

       </div>
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required/>
         <input type='email' name='email' placeholder='email' required />
         <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>

       </form>

     </div>
   </section>
  )
}
