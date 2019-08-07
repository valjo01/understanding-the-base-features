import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickAsAReference}>Ich bin {props.name} und {props.age} Jahre alt!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;