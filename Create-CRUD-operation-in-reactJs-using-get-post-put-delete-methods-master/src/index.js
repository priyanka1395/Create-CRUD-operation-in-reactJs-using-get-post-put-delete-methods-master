import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './cluster.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Products from './products/Products';
import Hospital from './Hospital';
import Products1 from './Products1';
import Products3 from './children/Products3';
import Products4 from './methodref/Products4';
import Products2 from './methodargref/Products2';
import Addition from './my2way/Addition';
import AverageNum from './my2way/AverageNum';
import Card from './Creditcard/Card';
import Fruit from './fruits/Fruit';
//import Products from './Changenm';

// function Animal(props){
//     return (
//     <div className="animal">
//       <h2>{props.name}</h2>
//   <p>
//       {props.stat}
//   </p>
//   <p>
//       Age: {props.age}
//   </p>
//   </div>
//    )
//   }
//   var myCluster = (
//   <div>
//     <Animal name="Tiger" stat="Fast Animal" age="40"/>
//     <Animal name="Lion" stat="Cruel Animal" age="30"/>
//   </div>
//     )
//   ReactDOM.render(myCluster,document.getElementById('root'))
ReactDOM.render(<Fruit/>, document.getElementById('root'));
// ReactDOM.render(<AverageNum/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<p> hhhhiiijjjjujjjjjjjiiiihhhhhii </p>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
