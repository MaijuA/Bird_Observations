import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

class AddObservation extends Component {
    state = {
        lat: "",
        long: ""
    }
    componentDidMount() {
        // to auto resize the textarea
        M.AutoInit();
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => M.toast({ html: "Geolocation disabled!" })
        );
    }

    render() {
        return (
            <div className="container">
                <h1>Add new observation</h1>
                <form className="col s12" onSubmit={e => this.props.onSubmit(e, this.state.lat, this.state.long)}>
                    <div>
                        <div className="input-field col s12">
                            <input placeholder="Name of the species" id="name" type="text" maxLength="20" onChange={this.validate} />
                        </div>
                        <div className="input-field col s12">
                            <select className="browser-default">
                                <option value="">Rarity</option>
                                <option value="Common">Common</option>
                                <option value="Rare">Rare</option>
                                <option value="Extremely rare">Extremely rare</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" placeholder="Notes..." maxLength="200" />
                        </div>
                        <Link to="/" className="red btn-flat white-text">
                            Cancel
                        </Link>
                        <button className="btn right waves-effect waves-light" type="submit" name="action">ADD
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddObservation;
