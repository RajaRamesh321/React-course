import React, { useState } from 'react'

export default function Textform(props) {
    const[text,setText]=useState("")

    const handleUpClick=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase()
setText(newText)
    }

    const handleLoClick=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toLowerCase()
setText(newText)
    }

const handleClear=()=>{
  let newText=' '
  setText(newText)
}
    const handleOnChnage=(event)=>{
        setText(event.target.value)
    }
   // text="new Text" //worng way to update text
   // setText('new text') //correc way to upadet text
  return ( 
    <>
     
      <div className='conatiner'></div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChnage} rows="8" id="myBox" ></textarea>
</div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
 <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to lowerercase</button>
 <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
    
  <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(' ').length} words {text.length} characters</p>
    <p>you can read it  in {0.008 * text.split(' ').length} </p>
  </div>
    </>
  )
}
