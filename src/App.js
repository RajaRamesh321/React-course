import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>   
 <Navbar title='TextUtils' aboutText="About TextUtils"/>
 {/* <Navbar/> */}
 <div className='container mb-3' >

 <Textform heading ="Enter Text to Analize"/>
 </div>
</>
  );
}

export default App;
