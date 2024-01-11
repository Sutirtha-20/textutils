import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



let name = "suti";

function App() {

  const [mode, setMode] = useState('light');  //usestate for light/dark mode

  const [alert, setAlert] = useState({ }); //state for setting alert

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({ });
    },2000);
  }

  let toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showalert("dark mode enbled", "success");
      document.title = 'TextUtils - Dark Mode';
  }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showalert("light mode enbled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils2" aboutText="les us say this is props" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="This is a text area" mode={mode} showAlert={showalert}/>
          </Route>
        </Switch> 
      </div>
      </Router>
      
    </>

  );
}


export default App;
