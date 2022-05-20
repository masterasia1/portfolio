import React from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

export const Contact= () => {
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact ME</h2>

     <div className='container contact_container'>
       <div className='contact_options'>
         <article className='contact_option'>
           <MdOutlineMail />
           <h4>Email</h4>
           <h5>a.mayfield18@gmail.com</h5>
           <a href='mailto:a.mayfield18@gmail.com'> Send a message</a>
         </article>
         <article className='contact_option'>
           <RiMessengerLine />
           <h4>Messenger</h4>
           <h5>Asia Mayfield</h5>
           <a href='https://m.me/the.biggest.continent'>Send a message</a>
         </article>

       </div>
       <form action="">
         <input type="text" name='name' placeholder='Your Full Name' required/>
         <input type='email' name='email' placeholder='email' required />
         <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>

       </form>

     </div>
   </section>
  )
}
