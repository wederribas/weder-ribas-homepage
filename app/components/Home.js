const React = require('react');

const introduction = {
  'content': `I'm a software engineer, dedicated to write good code for amazing products.
              Currently, I'm working at IBM Brazil as a Full Stack Web Developer. I've been developing
              software for 4 years - and I'd love to help you become a better programmer.`
}

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row align-items-center .no-gutters'>
          <div className='col-lg-6 order-sm-1 order-lg-2'>
            <div className='p-sm-5 p-5 pl-lg-0'>
              <img src={require('../images/me.jpg')} className='mx-auto d-block img-fluid rounded-circle'/>
            </div>
          </div>
          <div className='col-lg-6 order-sm-2 order-lg-1'>
            <div className='p-sm-3 p-2'>
              <h1 className='title'>Hello! I'm Weder</h1>
              <p className='common-text'>{introduction.content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home;
