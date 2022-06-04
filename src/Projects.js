import React from 'react'
import './Projects.css'
import img2 from './images/img2.jpg'


const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects</h2>

        <div className='container project_container'>
          <article className='project_item'>
            <div className='project_item-image'>
              <img src={img2} alt='' />
            </div>
              <h3>GPT-3 Text Generator</h3>
              <div className='project_item-cta'>
              <a href='https://github.com/masterasia1/gpt3-app' className='btn'>Github</a>
              <a href='https://github.com/masterasia1/gpt3-app' className='btn btn-primary'>Video</a>
              </div>
          </article>
          <article className='project_item'>
            <div className='project_item-image'>
              <img src={img2} alt='' />
            </div>
              <h3>Van Life Website</h3>
              <div className='project_item-cta'>
              <a href='https://github.com/masterasia1/van-life' className='btn'>Github</a>
              <a href='https://asiamayfield.dev/van-life/' className='btn btn-primary'>Demo</a>
            </div>
          </article>
          <article className='project_item'>
            <div className='project_item-image'>
              <img src={img2} alt='' />
            </div>
              <h3>Plant Life CRUD App</h3>
              <div className='project_item-cta'>
              <a href='https://github.com/masterasia1/some-plants' className='btn'>Github</a>
              <a href='https://github.com/masterasia1/gpt3-app' className='btn btn-primary'>Video</a>
            </div>
          </article>

        </div>
    </section>
  )
}

export default Projects