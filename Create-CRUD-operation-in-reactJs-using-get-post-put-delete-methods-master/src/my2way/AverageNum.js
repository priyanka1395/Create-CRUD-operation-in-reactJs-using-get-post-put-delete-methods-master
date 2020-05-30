import React, { Component } from 'react';

class AverageNum extends Component {

    constructor() {
        super();
        this.state = {
            // a: "10",
            // b: "20",
            odia: 10,
            hindi: 20,
            eng: 30,
            phy: 40,
            acc: 50,
            avg: 0
        }
    }

    changeFirst = (event) => {
        this.setState({
            odia: event.target.value
        })
    }

    changeSecond = (event) => {
        console.log("=> ", event);
        this.setState({
            hindi: event.target.value
        })
    }

    changeThird = (event) => {
        this.setState({
            eng: event.target.value
        })
    }

    changeFourth = (event) => {
        this.setState({
            phy: event.target.value
        })
    }

    changeFifth = (event) => {
        this.setState({
            acc: event.target.value
        })
    }

   

    avgNumbers = () => {
        this.setState({
            // c: parseInt(this.state.a) + parseInt(this.state.b)
            avg: (parseInt(this.state.odia) + parseInt(this.state.hindi) + parseInt(this.state.eng) + parseInt(this.state.phy) + parseInt(this.state.acc)) / 5
        })
    }

    render() {

        //Inline styling in ReactJS

        var style = {
            color: 'red',
            fontFace: 'georgia',
            padding: '20px'
        }

        return (
            <div>
                <p>
                Odia : <input onChange={this.changeFirst} value={this.state.odia} /><br />
                </p>
                <p>
                Hindi : <input onChange={this.changeSecond} value={this.state.hindi} /><br />
                </p>
                <p>
                English : <input onChange={this.changeThird} value={this.state.eng} /><br />
                </p>
                <p>
                Physics : <input onChange={this.changeFourth} value={this.state.phy} /><br />
                </p>
                <p>
                Accounting : <input onChange={this.changeFifth} value={this.state.acc} />
                </p>

                <p>
                    Average of Five subject is :
                     {/* {this.state.odia} and {this.state.hindi} and {this.state.eng} and {this.state.phy}
                     and {this.state.acc} is  */}
                    {this.state.avg}
                </p>
                <p>
                    <button style={style} onClick={this.avgNumbers}>Average</button>
                </p>
            </div>
        )
    }

}

export default AverageNum;