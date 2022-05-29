import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const onChangeMethod =(event)=>{
        console.log("on change clicked ")
        setText(event.target.value)
     }

     const clearTextHandle = () =>{
        let newtext=""
        setText(newtext)
     }

    const UpperCaseClick=()=>{
         console.log("upper case clicked "+ text)
         let newUperCaseText= text.toUpperCase();
         setText(newUperCaseText)
        }

    const LowerCaseCLick =()=>{
        console.log("lower case clicked"+ text)
        let newLowerCaseText= text.toLocaleLowerCase();
        setText(newLowerCaseText)
    }

    const CapitalizeTextHandle=()=>{
    

    }

    const [text,setText] = useState("Enter text here...");
    //setText("rahul")
  return (
    <>
        <div className="mb-3">
            <div className='mb-3'>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" value= {text} onChange={onChangeMethod} onClick={clearTextHandle} rows="8"></textarea>
            </div>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={UpperCaseClick}>Convert To UpperCase</button>
                <button type="button" className="btn btn-outline-primary mx-2" onClick={LowerCaseCLick}>Convert To LowerCase</button> 
                <button type="button" className="btn btn-outline-primary mx-2" onClick={clearTextHandle}>Clear Text</button> 
                <button type="button" className="btn btn-outline-primary mx-2" onClick={CapitalizeTextHandle}>Capitalize Text</button> 

        </div>
        <div className="container">
            <h1> Text Summary </h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{text.length === 0 ? 0 : 0.008 * text.split(" ").length.toFixed(1)} minutes of read</p>
            <h2> Preview </h2>
            <p>{text}</p>
        </div>

        
    </>
  )
}

TextForm.propTypes={
        heading: PropTypes.string.isRequired
}

// TextForm.defaultProps={
//     heading:"Please enter your String",
// }
