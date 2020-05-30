import React from 'react';
import './Premiumcard.css';
const Premiumcard = (props) => {
    return (
        <div className="Premium">
            <h6>Premium Card</h6>
            <h2>{props.name}</h2>
            <h3>Age : {props.age}</h3>
            <p>
                Salary : {props.salary}
            </p>
        </div>
    )
}

export default Premiumcard;