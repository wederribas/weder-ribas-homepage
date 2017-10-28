import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='text-center pt-3'>
          <h1 className='title'>Hello! I'm Weder</h1>
        </div>
        <div className='pt-3'>
          <p className='common-text mx-sm-5'>I've been programming since I was 15, when I first met the Python programming language. Since then, I started learning and working with Python, Django and Javascript as a Web Developer. Back in 2016, I've started working at IBM with PHP and Perl, increasing my portifolio of known technology stacks.</p>
          <p className='common-text mx-sm-5'>I've got a Bachelor's degree in Software Development and currently I'm enrolled in the Full Stack Web Developer Nanodegree at Udacity.</p>
          <p className='common-text mx-sm-5'>I was born here in Brazil and live here with my wife.</p>
        </div>
      </div>
    )
  }
}

export default About;
