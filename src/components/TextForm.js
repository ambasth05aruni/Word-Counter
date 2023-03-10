import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked!")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleloClick = () => {
        console.log("Lowercase was clicked!")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleclear = () => {
        console.log("Text area is to be cleared")
        setText(" ")
    }

    const handleOnChange = (event) => {
        console.log("Text was updated by the user.")
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("Text was copied!")
        const copyText=document.getElementById("myBox")
        copyText.focus()
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText.value);
        alert("Text was copied");

    }
    const handleOnPreview = (event) => {
        console.log("Preview was updated.")
        setText(event.target.value)
    }



    const [text, setText] = useState("Enter text here")

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary " id='first' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 " id='second' onClick={handleloClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2 " id='third' onClick={handleclear}>CLEAR</button>
                <button className="btn btn-primary mx-2 my-2 " id='fourth' onClick={handleCopy}>COPY</button>


            </div>
            <div className="container my-4" >
                <h2>Your text summary!</h2>
                <p><b>{text.split(" ").length} word and {text.length} characters.</b></p>
                <p>{0.008 * text.split(" ").length} Minutes Read.</p>
                <h3>Preview</h3>
                <p type="text" onChange={handleOnPreview}>{text}</p>
            </div>

        </>
    )
}
TextForm.propTypes = {


};
