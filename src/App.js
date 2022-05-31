
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'

function App() {

    const [mode, setMode] = useState("light")
    const [toggleText, setToggleText] = useState("Enable Dark Mode")
    const [text, setText] = useState('dark')

    const toggleMode = () =>{
        if(mode==='light'){
          setMode('dark')
          setText('light')
          setToggleText("Enable Light Mode")
          document.body.style.backgroundColor ="black"

        }
        else{
          setMode('light')
          setText('dark')
          document.body.style.backgroundColor ="white"
          setToggleText("Enable Dark Mode")
        }
    }


  return (
    <>
       {/* <Navbar title="Textutils" aboutext="aboutext" />   */}
       <Navbar title="TitleUtils" mode={mode} toggleMode={toggleMode} toggleText={toggleText} text={text}/> 

       <div className='container'>
         <TextForm heading="Please enter your String"/>  
       </div> 
       {/* <About/> */}
       
    </>
  );
}

export default App;
