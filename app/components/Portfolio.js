import React from 'react';
import Card from './Card';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row d-block text-center'>
          <h1 className='title pt-4 pb-2'>My Portfolio</h1>
          <h4 className='pb-3'>Take a look at my latest works</h4>
        </div>
        <div className='card-deck'>
          <div className='row'>
            <Card
              title='Battle of Coders'
              image={require('../images/battle-of-coders.png')}
              bodyText='Pure ReactJS app for battle your friends in Github. Thanks to Tyler McGinnis.'
              link={'https://battle-of-coders.firebaseapp.com'}
              linkText='Access it live!'/>
            <Card
              title='My Homepage'
              image={require('../images/homepage.png')}
              bodyText='My personal homepage. Built with React, Redux and Bootstrap.'
              link={'https://weder-ribas.firebaseapp.com'}
              linkText='Access it live!'/>
            <Card
              title='Movies Trailers'
              image={require('../images/movies-trailer.png')}
              bodyText="Udacity 1st project to display movies' trailers from Youtube"
              link={'https://github.com/wederribas/movies-trailers'}/>
            <Card
              title='BigPy'
              image={require('../images/python-project.png')}
              bodyText='Platform for customers satisfation analysis based on open data.'
              link={'https://github.com/wederribas/bigpy'} />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
