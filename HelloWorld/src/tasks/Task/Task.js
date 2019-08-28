import React from 'react';
import './Task.css';

const task = (props) => {
    return (
        <div>
            <p onClick={props.click}>Task #{props.number} added! (ID={props.id})</p>
            <h6>{props.children}</h6>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default task;