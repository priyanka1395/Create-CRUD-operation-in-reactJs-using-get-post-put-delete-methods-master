import React, { Component } from 'react';

class Changenm extends Component {

    constructor() {
        super();
        this.state = {
            name: "Calcutta"

        }
    }
    changeName() {
        this.setState({
            name: 'Kolkata'
        })
    }
    render() {
        return (

            <div>
                <button onClick={() => this.changeName()}>Change Now</button><hr />
                The Name is {this.state.name}
            </div>
        )
    }
}
export default Changenm;