const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

// Require custom CSS
require('./css/index.css');

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
