import './App.css';
import image from './images/img-1.png';
import {Container, Button,  Card} from 'react-bootstrap';
import {Contact} from './Contact'
import Skills from './Skills';

function App() {

  return (
   
    
    <div>
   
   <div className='headerStyle'>
     <header>
       <h2>Asia Mayfield</h2>
       <p>Frontend Software Engineer | React Developer</p>
     </header>
   </div>
   
   <img src={image} alt="Profile"></img>
   <Container>

   <div className='bodyStyle'>
     <h1>About</h1>
     <p>blavj blavj </p>
     </div>

     <br />
     <br />
    <Skills />
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
