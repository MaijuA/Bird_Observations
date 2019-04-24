import React from 'react';
import {
  Route, withRouter
} from 'react-router-dom';
import M from "materialize-css";
import './App.css';
import Observations from './components/Observations';
import AddObservation from './components/Form';
import Navigation from './components/Navigation';

class App extends React.Component {
  constructor() {
    super();
    let data = []
    if (localStorage.getItem('observations')) {
      data = JSON.parse(localStorage.getItem('observations'))
    }

    this.state = {
      observations: data
    }
  }

  addNew = (e, lat, long) => {
    e.preventDefault()
    if (e.target[0].value.length < 1) {
      M.toast({ html: "Name field can't be empty!" })
      return;
    }
    // a random id generator
    const id = (Math.random() * 10000).toFixed(0);
    const observation = {
      id: id,
      name: e.target[0].value,
      rarity: e.target[1].value,
      notes: e.target[2].value,
      timestamp: new Intl.DateTimeFormat('en-EN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(Date.now()),
      latitude: lat,
      longitude: long
    }

    const newObservations = this.state.observations.concat(observation);
    this.setState({
      observations: newObservations
    });
    localStorage.setItem('observations', JSON.stringify(newObservations))

    this.props.history.push("/");
    M.toast({ html: "New observation added!" })
  };

  render() {
    return (
      < div >
        <Navigation />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => <Observations observations={this.state.observations.slice().reverse()} />}
          />
          <Route
            path="/create"
            render={({ history }) => (
              <AddObservation history={history} onSubmit={this.addNew} setRarity={this.setCurrentRarity} />
            )}
          />
        </div>
      </div >
    )
  }
}

export default withRouter(App);
