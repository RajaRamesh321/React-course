import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'

// import Textform from './components/Textform';
function App() {
  const [mode,setMOde]=useState('light')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMOde('light')
    }
    else{
      setMOde('dark')
    }

  }
  return (
    <>   
 <Navbar title='TextUtils' aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
 {/* <Navbar/> */}
 <div className='container mb-3' >

 <Textform heading ="Enter Text to Analize"  mode={mode}/>
 {/* <About/> */}
 </div>
</>
  );
}

export default App;
