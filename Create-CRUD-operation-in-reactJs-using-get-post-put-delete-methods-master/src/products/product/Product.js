import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     name: "Bangalore"
        //  }
    }
    // changeName(){
    //     this.setState({
    //         name: 'Bengaluru'
    //     })
    // }
    render() {
        return (
            <div className="productStyle">
                <h2>{this.props.name}</h2>
                <p>
                    Cost is: {this.props.cost}
                </p>
            </div>
        )
    }
}
export default Product;