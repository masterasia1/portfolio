import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Skills.css'

const Skills = () => {
  return (
    <section id='experience'> 
    <h2>Skills</h2>
    <div className='container experience_container'>
      <div className='skills_frontend>'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>HTML</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>CSS</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>React Bootstrap</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>JavaScript</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>ReactJS</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>Redux</h4>
            </div>
            </article> 
   
            

        </div>

      </div>
      <div className='skills_backend'>

      <h3>Backend Development</h3>
        <div className='experience_content'>
          
          <article className='experience_details'>
            <BsPatchCheckFill />
            <div>
            <h4>NodeJS</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill />
            <div>
            <h4>Express</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>SQL</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>PostgreSQL</h4>
            </div>
            </article> 
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icon'/>
            <div>
            <h4>Github</h4>
            </div>
            </article> 
           
            

        </div>

      </div>
    </div>

    </section>
  )
}

export default Skills