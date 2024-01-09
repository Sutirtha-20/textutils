import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <div className="mb-3">
                <label for="MyTextBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
        </div>
    )
}
