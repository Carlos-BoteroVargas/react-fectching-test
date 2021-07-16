import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // initialize the astronauts with an empty array
    // to avoid running into null pointer exceptions
    // after the first render, but before the componentDidMount() gets called
    this.state = {
      astronauts: [],
      api: 'http://api.open-notify.org/astros.json',
    };
  }

  // make sure to fetch from this React life cycle
  componentDidMount() {
    // use JavaScript's fetch API
    fetch(this.state.api)
      .then(res => res.json())
      .then(data => {
        // update the component's local state to the json object's people array
        this.setState({
          astronauts: data.people
        });
      });
  } 

  render() {
    // create a list node to add to the DOM
    const astronautList = this.state.astronauts.map((astronaut, index) => (
      <li key={`astro-${index}`}>
        <p>{astronaut.name} is flying in the {astronaut.craft} spacecraft</p>
      </li>
    ));

    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {astronautList}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
