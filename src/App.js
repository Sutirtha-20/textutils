import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



let name = "suti";

function App() {

  const [mode, setMode] = useState('light'); 

  let toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
  }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <Navbar title="Textutils2" aboutText="les us say this is props" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        {/* <TextForm heading="This is a text area"/> */}
        <About/>
      </div>
      
    </>

  );
}


export default App;
