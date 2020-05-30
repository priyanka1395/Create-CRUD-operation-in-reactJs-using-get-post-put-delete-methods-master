import React from 'react';
import './Normalcard.css';
const Normalcard = (props) => {
    return (
        <div className="Normal">
            <h6>Normal Card</h6>
            <h2>{props.name}</h2>
            <h3>Age : {props.age}</h3>
            <p>
                Salary : {props.salary}
            </p>
        </div>
    )
}

export default Normalcard;