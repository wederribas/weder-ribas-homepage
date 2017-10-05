const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const GitHubIcon = require('react-icons/lib/go/mark-github');
const TwitterIcon = require('react-icons/lib/fa/twitter');
const LinkedinIcon = require('react-icons/lib/fa/linkedin-square');

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark flex-column flex-md-row'>
        <NavLink exact className='nav-brand' to='/'>
          <img
            src={require('../images/brand.png')}
            className='d-inline-block align-top'
            width='30'
            height='30'
            alt=''
          />
        </NavLink>
        <div className='d-flex flex-row ml-md-3'>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/portfolio'>Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/about'>About me</NavLink>
            </li>
          </ul>
        </div>
        <ul className='navbar-nav flex-row ml-md-auto d-none d-md-flex'>
          <li className='nav-item'>
            <a className='nav-link' target="_blank" href='https://github.com/wederribas'><GitHubIcon /></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' target="_blank" href='https://twitter.com/wederribas'><TwitterIcon /></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' target="_blank" href='https://www.linkedin.com/in/weder-alves-ribas-87b33568'><LinkedinIcon /></a>
          </li>
        </ul>
        <button type='button' className='btn btn-bd-yellow d-none d-lg-inline-block ml-md-3'>Hire me!</button>
      </nav>
    )
  }
}

module.exports = Nav;
