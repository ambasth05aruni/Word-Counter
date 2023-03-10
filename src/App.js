import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';


function App() {

const [mode,setMode] =useState('light') //whether dark state is enabled or not

const toggleMode=()=>{
if(mode==='light'){
  setMode('dark')
 document.body.style.backgroundColor='black' 
  document.body.style.color='white'

}
else{
  setMode('light')
  document.body.style.backgroundColor='white'
  document.body.style.color='black'
}

}


const pinkToggleMode=()=>{
  if(mode==='light'){
    setMode('info')
    document.body.style.backgroundColor='blue'
    document.body.style.color='dark'
  document.getElementById('first').style.backgroundColor='black'
  document.getElementById('second').style.backgroundColor='black'
  document.getElementById('third').style.backgroundColor='black'
  document.getElementById('fourth').style.backgroundColor='black'
  
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    document.body.style.color='dark'
    document.getElementById('first').style.backgroundColor='blue'
  document.getElementById('second').style.backgroundColor='blue'
  document.getElementById('third').style.backgroundColor='blue'
  document.getElementById('fourth').style.backgroundColor='blue'
  }
  
  }


  return (
<>
<Navbar title= "React Tutorial" mode={mode} toggleMode={toggleMode} pinkToggleMode={pinkToggleMode}/>
<div div className="container my-3">
<TextForm heading="Enter the text to Analyse."/>
</div>
{/* <div>
  <hr/>
</div> */}
{/* <div className="container">
  <About/>
</div> */}
</>
  );
}

export default App;
