import React from 'react';
import { Link } from "react-router-dom";
import Observation from './Observation';


class Observations extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Observations</h1>
                </div>
                {this.props.observations.map(observation =>
                    <Observation key={observation.id} observation={observation} />
                )}
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large red">
                        <i className="material-icons">+</i>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Observations;
