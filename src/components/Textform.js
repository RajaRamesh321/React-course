import React, { useState } from 'react'

export default function Textform(props) {
    const[text,setText]=useState("Enter text here")

    const handleUpChange=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase()
setText(newText)
    }

    const handleOnChnage=(event)=>{
        setText(event.target.value)
    }
   // text="new Text" //worng way to update text
   // setText('new text') //correc way to upadet text
  return ( 
      <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChnage} rows="8" id="myBox" ></textarea>
</div>
 <button className="btn btn-primary" onClick={handleUpChange}>Covert to Uppercase</button>
    
    </div>
  )
}
