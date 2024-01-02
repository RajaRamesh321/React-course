import React, { useState } from 'react'

export default function Textform(props) {
    const[text,setText]=useState("")

    const handleUpClick=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase()
setText(newText)
props.showAlert("Converted to Uppercase","success")

    }

    const handleLoClick=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toLowerCase()
setText(newText)
props.showAlert("Converted to Lowercase","success")

    }

const handleClear=()=>{
  let newText=' '
  setText(newText)
  props.showAlert("Text is Cleared","success")
}
    const handleOnChnage=(event)=>{
        setText(event.target.value)
    }
   // text="new Text" //worng way to update text
   // setText('new text') //correc way to upadet text
  return ( 
    <>
     
      <div className='conatiner' style={{color:props.mode==='dark'?'white':'#042743'}}></div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChnage} rows="8" id="myBox" 
  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to lowerercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(' ').length} words {text.length} characters</p>
    <p>you can read it  in {0.008 * text.split(' ').length } minutes </p>
    <h2>Preview</h2>
    <p>{text}</p>
    <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
  </div>
    </>
  )
}
