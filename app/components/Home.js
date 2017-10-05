const React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row align-items-center .no-gutters'>
          <div className='col-lg-6 order-sm-1 order-lg-2'>
            <div className='p-sm-5 p-5 pl-lg-0'>
              <img src={require('../images/weder.jpg')} className='mx-auto d-block img-fluid rounded-circle'/>
            </div>
          </div>
          <div className='col-lg-6 order-sm-2 order-lg-1'>
            <div className='p-sm-3 p-2'>
              <h1>Hello! I'm Weder</h1>
              <p>Hey, I'm Dan Bader and I help Python developers take their coding skills and productivity to the next level. I'm an independent software engineer, author, and speaker. I've been developing software for 15 years—and I'd love to help you become a more proficient Python coder.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home;
