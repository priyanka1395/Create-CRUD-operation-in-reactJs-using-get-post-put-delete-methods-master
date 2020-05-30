import React from 'react';
import PremiumCard from './Premiumcard/Premiumcard';
import NormalCard from './Normalcard/Normalcard';
const User = (props) => {

    // var cardType ;
    // if(props.salary>150000){
    //     cardType = (
    //         <PremiumCard name={props.name} age={props.age} salary={props.salary}/>
    //     )
    // }
    // else{
    //     cardType=(
    //         <NormalCard name={props.name} age={props.age} salary={props.salary}/>
    //     )
    // }
    // return (
    //     <div>
    //     {cardType}
    //     </div>
    //     )


    return (
        <div>
            {(props.salary > 150000) ? <PremiumCard name={props.name} age={props.age} salary={props.salary} /> : <NormalCard name={props.name} age={props.age} salary={props.salary} />}
        </div>
    )

}

export default User;