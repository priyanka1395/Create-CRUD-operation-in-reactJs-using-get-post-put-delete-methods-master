
//Getting children of component

import React,{Component} from 'react';
import Product3 from './Product3';

class Products3 extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Product3 name="Apple" cost="300">Apple is good for health></Product3>
            </div>
        )
    }
}

export default Products3;