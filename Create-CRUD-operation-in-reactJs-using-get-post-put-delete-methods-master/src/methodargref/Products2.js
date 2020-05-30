//Parsing Method Argument reference to child component

import React, { Component } from 'react';
import Product2 from './Product2';

class Products2 extends Component {

    getName = (arg) => {
        alert("Hi this is " +arg);
    }

    render() {
        return (
            <div>
                <p>
                    
                    <Product2 myClick={this.getName.bind(this,"Mohan")}/><br/>
                    <Product2 myClick={this.getName.bind(this,"Sohan")}/>

                </p>
            </div>
        )
    }
}

export default Products2;