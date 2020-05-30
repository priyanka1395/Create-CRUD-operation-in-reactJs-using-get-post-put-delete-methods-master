import React,{Component} from 'react';
import axios from 'axios';

class Fruit extends Component{

constructor(){
    super();
    this.state = {
        btn_stt : true,
        fruits : [],
        fruit : {
            edit_id : 0,
            name : 'Fruit 111',
            cost: 230,
            image : '',
            brand : "CampI"

        }
    }
}

componentDidMount(){
    axios.get("http://localhost:3002/api/products").then((res)=>{
        console.log('The product list is ',res.data);
        this.setState({
            fruits : res.data
        })
            })
            .catch((err)=>{
                console.log('The error is ',err);
            })
}

getProducts = ()=>{
    axios.get("http://localhost:3002/api/products").then((res)=>{
        console.log('The product list is ',res.data);
        this.setState({
            fruits : res.data
        })
            })
            .catch((err)=>{
                console.log('The error is ',err);
            })
}

saveRecord=()=>{
    console.log('The fruit detail is ',this.state.fruit);
    axios.post("http://localhost:3002/api/products",this.state.fruit).then((res)=>{
console.log('The save status is ',res.data.message);
    })
    .catch((err)=>{
        console.log('The error is ',err);
    })
}

delrecord=(id)=>{
console.log('The id is ',id);
axios.delete("http://localhost:3002/api/products/"+id).then((res)=>{
console.log('The delete status is ',res);
this.getProducts();
})
.catch((err)=>{
    console.log('The error is ',err);
})
}

editRecord = (fruit)=>{
this.setState({
    edit_id : fruit._id,
    fruit : fruit,
    btn_stt : false
})
}

changeName = (event)=>{
    this.setState({
        fruit : {
            name : event.target.value
        }
    })
}


updateRecord = ()=>{
    console.log("The edit id ",this.state.edit_id)
    axios.put("http://localhost:3002/api/products/"+this.state.edit_id,this.state.fruit).then((res)=>{
console.log("The update status is ",res);
this.getProducts();
    })
    .catch((err)=>{
        console.log('Te error is ',err);
    })
}

render(){

    return (
        <div>
<p>
Name : <input value={this.state.fruit.name} onChange={this.changeName}/> {this.state.fruit.name}
</p>
<p>
Cost : <input value={this.state.fruit.cost} />
</p>
<p>
Image : <input value={this.state.fruit.image} />
</p>
<p>
Brand : <input value={this.state.fruit.brand} />
</p>
<p>
    {
        (this.state.btn_stt==true)?<button onClick={this.saveRecord}>Save</button>:<button onClick={this.updateRecord}>Update</button>
    }

</p>
            
    <hr/>
    <table>
        <thead>
        <th>Name</th><th>Cost</th><th>Image</th><th>Brand</th><th>Action</th>
        </thead>
        <tbody>
    {

        this.state.fruits.map((fruit)=>{
            return (<tr>
                <td>{fruit.name}</td>
                <td>{fruit.cost}</td>
                <td>
                <img src={fruit.image} width='100' height='100'/></td>
                <td>{fruit.brand}</td>
                <td>
<button onClick={()=>this.delrecord(fruit._id)}>Delete</button> 
<button onClick={()=>this.editRecord(fruit)}>Edit </button>
                    </td>
            </tr>)
        })
    }        
    </tbody>
    </table>
    </div>
    )

}


}

export default Fruit;