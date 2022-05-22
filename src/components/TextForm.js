import React from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  return (
    <>
        <div className="mb-3">
            <div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" rows="8"></textarea>
            </div>
            
                <button type="button" className="btn btn-outline-primary">Convert To UpperCase</button>
            
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
