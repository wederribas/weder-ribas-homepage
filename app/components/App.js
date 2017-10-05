const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Nav = require('./Nav');
const Home = require('./Home');
const Portfolio = require('./Portfolio');
const About = require('./About');

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
