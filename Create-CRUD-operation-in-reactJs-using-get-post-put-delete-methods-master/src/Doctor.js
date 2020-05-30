import React from 'react';

const Doctor = (props) => {
    return (
        // <div>
        //     <h2> Doctor is here </h2>
        // </div>

        <div>
            <h3> {props.name} </h3>
            <h4> {props.age} </h4>
            <p>  {props.sal} </p>
        </div>
    )
}

export default Doctor;