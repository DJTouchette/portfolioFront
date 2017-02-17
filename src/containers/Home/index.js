import React, { Component } from 'react';
import './Home.css';
import { typeText } from './helpers';
import postFetch from '../Contact/helpers';

class Home extends Component {
  // constructor

  componentDidMount() {
    const body = { name: 'Visit', email: 'me@me.com', description: 'visit plus 1', message: 'New visit', budget: 0 };
    postFetch('https://damientouchette.io/api/v1/quote', body).then((json) => {
      console.log(json);
    });
    typeText();
  }

  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="content">
          <div>
            <h1 id="changeText">Hello World.</h1>
          </div>
          <div className="">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
