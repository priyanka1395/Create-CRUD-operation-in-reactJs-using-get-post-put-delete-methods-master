//Parsing Method reference to child component

import React, { Component } from 'react';
import Product4 from './Product4';

class Products4 extends Component {

    getName = () => {
        alert("Hi this is Mohan");
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.getName}>Click</button>
                    <Product4 myClick={this.getName}/>
                </p>
            </div>
        )
    }
}

export default Products4;