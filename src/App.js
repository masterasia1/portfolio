import './App.css'
import image from './images/img-1.png'

function App() {


  return (
    <div>
   <div className='headerStyle'>
     <header>
       <h2>Asia Mayfield</h2>
       <p>Frontend Software Engineer | React Developer</p>
     </header>
   </div>
   <br />
   <br />
   <img src={image} alt="Girl in a jacket"></img>
   </div>

  );
}

export default App;
