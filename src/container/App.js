import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../component/Layout';
import Episodes from '../component/Episodes';
import Charactes from '../component/Characters';
import Planets from '../component/Planets';
import Loading from '../component/single_component/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(resp => this.setState({ films: resp }))
      .catch(error => console.log(error));
  }

  render() {
    const films = this.state.films.results;
    return (films) ?
      (
        <div>
          <Layout />
          <Router>
            <Route exact path="/" component={() => <Episodes films={films} />} />
            <Route path="/characters" component={Charactes} />
            <Route path="/planets" component={Planets} />
          </Router>
        </div>
      ) :
      (
        <Loading />
      );
  }
};

export default App;
