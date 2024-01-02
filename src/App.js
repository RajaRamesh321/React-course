import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import Alert from './components/Alert';

// import Textform from './components/Textform';
function App() {
  const [mode,setMOde]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMOde('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode Enabled","success")
    }
    else{
      setMOde('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode Enabled","success")

    }

  }
  return (
    <>   
 
 <Navbar title='TextUtils' aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 {/* <Navbar/> */}
 <div className='container mb-3' >

 <Textform showAlert={showAlert} heading ="Enter Text to Analize"  mode={mode}/>
 {/* <About/> */}
 </div>
</>
  );
}

export default App;
