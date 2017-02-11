import React, { Component } from 'react';
import './Home.css';
import { typeText } from './helpers';
import Card from '../../components/TestimonialCard/Card';
import { data } from '../../containers/Testimonials/data';

class Home extends Component {
  // constructor

  componentDidMount() {
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
            <Card
              cssClass="homeTestimonial"
              {...data[1]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
