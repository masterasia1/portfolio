import './App.css';
import image from './images/img-1.png';
import {Container, Button,  Card} from 'react-bootstrap';
import {Contact} from './Contact'
import Skills from './Skills';
import Projects from './Projects';

function App() {

  return (
   
    
    <div>
   
   <div className='headerStyle'>
     <header>
       <h2>Asia Mayfield</h2>
       <p>Frontend Software Engineer | React Developer</p>
       <p><a href='https://github.com/masterasia1'>Github</a> | <a href='https://www.linkedin.com/in/asia-mayfield/'>LinkedIn</a></p>
     </header>
   </div>
   
   <img src={image} alt="Profile"></img>
   <Container>

   <div className='bodyStyle'>
     <h2>About</h2>
     <p>I'm Asia. Kitten enthusiast, content warrior, and React developer. I've developed and executed content strategies</p>
     <p>for leading startups. Now, I'm focused on creating apps that touch lives. Let's build something extraordinary!</p>
     </div>
     <br />
    <Skills />
     <br />
     <br />
    <Projects />
     <br />
     <br />
     <Contact />
     <br />
     <br />
     </Container>
    
     <div className='footer'>

     </div>
     
   </div>
   
   


  );
}

export default App;
