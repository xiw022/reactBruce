import React from 'react';
import './Project.css'
const project = (props) => {
    return (
        <div className = "Project">
        <p onClick={props.click}>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.comment}</p>
        <input type = "text" onChange={props.altered} value={props.comment}/>
        </div>
    )
};
export default project;
