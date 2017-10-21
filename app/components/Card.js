const React = require('react');
const PropTypes = require('prop-types');

function Card(props) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 pt-3'>
      <div className='card text-white bg-dark mb-3'>
        <img className='card-img-top' src={props.image} alt='Card image cap'/>
        <div className='card-body'>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-text'>{props.bodyText}</p>
          <a href={props.link} className='btn btn-outline-light btn-sm'>{props.linkText}</a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

Card.defaultProps = {
  link: 'https://github.com/wederribas',
  linkText: 'Check to code!'
};

module.exports = Card;
