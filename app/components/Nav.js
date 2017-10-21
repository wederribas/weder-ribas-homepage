const React = require('react');
const NavLink = require('react-router-dom').NavLink;

const socialMediaLink = {
  'github': 'https://github.com/wederribas',
  'linkedin': 'https://www.linkedin.com/in/weder-alves-ribas-87b33568',
  'slack': 'https://ribaslabs.slack.com',
  'twitter': 'https://twitter.com/wederribas'
}

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light flex-column flex-md-row' style={{'backgroundColor': 'white'}}>
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
        </div>
        <ul className='navbar-nav flex-row ml-md-auto d-none d-md-flex'>
          <li className='nav-item'>
            <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.github}>
              <i className='fa fa-github fa-lg' title='My Github account'></i>
              <span className='sr-only'>My Github account</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.linkedin}>
              <i className='fa fa-linkedin fa-lg' title='My Linkedin account'></i>
              <span className='sr-only'>My Linkedin account</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.slack}>
              <i className='fa fa-slack fa-lg' title='My Slack workspace'></i>
              <span className='sr-only'>My Slack workspace</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' target='_blank' aria-hidden='true' href={socialMediaLink.twitter}>
              <i className='fa fa-twitter fa-lg' title='My Twitter account'></i>
              <span className='sr-only'>My Twitter account</span>
            </a>
          </li>
        </ul>
        <button type='button' className='btn btn-bd-yellow d-none d-lg-inline-block ml-md-3'>Hire me!</button>
      </nav>
    )
  }
}

module.exports = Nav;
