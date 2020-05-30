import React, {Component} from 'react';
import Doctor from './Doctor';
class Hospital extends Component {

    render() {
        return (
            // <div>
            //     <h3>This is Hospital</h3>
            //     <Doctor/><br/>
            //     <Doctor/>
            // </div>

            <div>
                <Doctor name="Mohan" age="21" sal="200"/><br/>
                <Doctor name="Sohan" age="23" sal="300"/>
            </div>
        )
    }

}

export default Hospital;