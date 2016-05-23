"use strict";

import React from 'react';

const TextInput = (props) => {

    let wrapperClass = 'form-group';
    if (props.error && props.error.length > 0) {
        wrapperClass += " " + 'has-error';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input type="text"
                       name={props.name}
                       className="form-control"
                       placeholder={props.placeholder}
                       /*ref={props.name}*/
                       onChange={props.onChange}
                       value={props.value}/>
                <div className="input">{props.error}</div>
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
};

export default TextInput;