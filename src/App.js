
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  
  return (
    <>
       {/* <Navbar title="Textutils" aboutext="aboutext" />   */}
       <Navbar title="TitleUtils"/> 
       {/* <div className='container'><TextForm heading="Please enter your String"/></div>  */}
       <About/>
       
    </>
  );
}

export default App;
