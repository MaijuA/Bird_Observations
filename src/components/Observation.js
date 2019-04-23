import React from 'react';

function notesLength(notes) {
    if (notes.length > 100) {
        return notes.substring(0, 100) + "..."
    }
    return notes
}

const Observation = (props) => (
    <div className="row">
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{props.observation.name}</span>
                    <p className="grey-text">{props.observation.rarity}</p>
                    <p className="grey-text">{props.observation.timestamp}</p>
                    <p className="grey-text">Latitude: {props.observation.latitude}</p>
                    <p className="grey-text">Longitude: {props.observation.longitude}</p>
                </div>
                <div className="card-action">
                    <p>{notesLength(props.observation.notes)}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Observation;