import React,{Component} from 'react';
import Product1 from './Product1';

class Products1 extends Component{

    constructor(){
        super();
        this.state1 = {
            product1:{name:"Apple",cost:"400",brand:"Kasmiri"},
            product2:{name:"Banana",cost:"200",brand:"Kashmiri"}
        }
    }

    render(){
        return(
            <div>
                <Product1 info={this.state1.product1}/>
                <Product1 info={this.state1.product2}/>
            </div>
        )
    }
}

export default Products1;