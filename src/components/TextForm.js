import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const onChangeMethod =(event)=>{
        console.log("on change clicked ")
        setText(event.target.value)
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

    const [text,setText] = useState("Enter text here");
    //setText("rahul")
  return (
    <>
        <div className="mb-3">
            <div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" value= {text} onChange={onChangeMethod} rows="8"></textarea>
            </div>
            
                <button type="button" className="btn btn-outline-primary" onClick={UpperCaseClick}>Convert To UpperCase</button>

                <button type="button" className="btn btn-outline-primary" onClick={LowerCaseCLick}>Convert To LowerCase</button>
            
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
