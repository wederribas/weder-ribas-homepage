import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
  }
  static defaultProps = {
    link: 'https://github.com/wederribas',
    linkText: 'Check to code!'
  }
  render() {
    const { image, title, bodyText, link, linkText } = this.props;
    return (
      <article className='col-sm-6 col-lg-3 pt-3'>
        <div className='card text-white bg-dark mb-3'>
          <img className='card-img-top' src={image} alt='Card image cap'/>
          <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{bodyText}</p>
            <a href={link} className='btn btn-outline-light btn-sm'>{linkText}</a>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;
