import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        console.log("upper clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        console.log("lower clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }

    //react hoooks this is called as a state variable
    const [text, setText] = useState('');

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
        </div>
        <div className="container my-3">
            <h1>your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
