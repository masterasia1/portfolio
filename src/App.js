import './App.css'
import image from './images/img-1.png'
import {Container, Button,  Card} from 'react-bootstrap';

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

   <div className='bodyStyle'>
     <h1>About</h1>
     <p>blavj blavj </p>





   </div>


   </div>

  );
}

export default App;
