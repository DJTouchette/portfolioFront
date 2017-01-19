import React, { Component } from 'react';
import './Home.css';
import { typeText } from './helpers';

class Home extends Component {

  componentDidMount() {
    typeText();
  }

  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="content">
          <h1 id="changeText">Hello World.</h1>
        </div>
      </div>
    );
  }
}

export default Home;