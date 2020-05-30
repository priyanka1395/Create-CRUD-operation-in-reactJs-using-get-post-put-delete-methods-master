import React, { Component } from 'react';
import User from './User';
class Card extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                { name: "Mohan", age: 21, salary: 200000 },
                { name: "Sohan", age: 22, salary: 100000 },
                { name: "Rohan", age: 23, salary: 50000 },
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.users.map((user) => {
                    return <User name={user.name} salary={user.salary} age={user.age} />
                })


                }

            </div>
        )
    }

}

export default Card;