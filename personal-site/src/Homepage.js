import React, { Component } from 'react';
import ProfilePic from './profile-pic.jpg'
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <img alt='profile-pic' className='profile-pic' src={ProfilePic}/>
      </div>
    );
  }
}

export default Homepage;
