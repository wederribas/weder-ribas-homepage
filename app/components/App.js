import React from 'react';
import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
