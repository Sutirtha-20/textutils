import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import logo from './logo.svg';
// import './App.css';

let name = "suti";

function App() {
  return (
    <>
      <Navbar title="Textutils2" aboutText="les us say this is props"/>
      <div className="container">
        {/* <TextForm heading="This is a text area"/> */}
        <About/>
      </div>
      
    </>

  );
}


export default App;
