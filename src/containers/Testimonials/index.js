import React, { Component } from 'react';
import TestimonialCardList from '../../components/TestimonialCard/index';
import { data } from './data';
import './Testimonials.css';

class Testimonials extends Component {

  render() {
    return (
      <div>
        <div className="bg"></div>
        <TestimonialCardList
          list={data}
          class="testimonial-container"
        />
      </div>
    );
  }
}

export default Testimonials;
