import React from 'react';
import { NavLink } from 'react-router-dom';

const socialMediaLink = {
  'github': 'https://github.com/wederribas',
  'linkedin': 'https://www.linkedin.com/in/weder-alves-ribas-87b33568',
  'slack': 'https://ribaslabs.slack.com',
  'twitter': 'https://twitter.com/wederribas'
}

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-light flex-column flex-sm-row'
           style={{'backgroundColor': 'white'}}>
        <NavLink exact className='nav-brand' to='/'>
          <img
            src={require('../images/brand.png')}
            className='d-inline-block align-top'
            width='30'
            height='30'
            alt=''
          />
        </NavLink>
        <div className='d-flex mr-sm-auto'>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/'>
                <i className='fa fa-home fa-fw fa-lg' aria-hidden='true'></i>&nbsp;Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/portfolio'>
                <i className='fa fa-briefcase fa-fw fa-lg' aria-hidden='true'></i>&nbsp;Portfolio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact className='nav-link' activeClassName='active' to='/about'>
                <i className='fa fa-user fa-fw fa-lg' aria-hidden='true'></i>&nbsp;About me
              </NavLink>
            </li>
          </ul>
          <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='#menu-toggle' aria-controls='menu-toggle'
                aria-expanded='false' aria-label='Toggle navigation'>
            <i className='fa fa-ellipsis-v fa-lg' aria-hidden='true'></i>
          </button>
        </div>
        <div className='collapse navbar-collapse d-md-inline-flex text-center' id='menu-toggle'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.github}>
                <i className='fa fa-github fa-lg' title='Github account'></i>
                <span className='d-inline-flex d-sm-none pl-3'>Github account</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.linkedin}>
                <i className='fa fa-linkedin fa-lg' title='Linkedin profile'></i>
                <span className='d-inline-flex d-sm-none pl-3'>Linkedin profile</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.slack}>
                <i className='fa fa-slack fa-lg' title='Slack workspace'></i>
                <span className='d-inline-flex d-sm-none pl-3'>Slack workspace</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.twitter}>
                <i className='fa fa-twitter fa-lg' title='Twitter account'></i>
                <span className='d-inline-flex d-sm-none pl-3'>Twitter account</span>
              </a>
            </li>
          </ul>
          <a className='btn btn-bd-yellow ml-md-3' href='mailto:wederribas@gmail.com'>Hire me!</a>
        </div>
      </nav>
    )
  }
}

export default Nav;
