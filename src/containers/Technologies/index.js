import React, { Component } from 'react';
import './Technologies.css';
import technologiesData from './technologiesData';
import LogoContainer from '../../components/LogoContainer/index';

class Technologies extends Component {

  render() {
    return (
      <div>
        <div className="bg"></div>
        <div className="Technologies"></div>
        <div className="technologiesContent">
          <h1 className="">Using the latest technologies to keep your app fast, reliable and responsive. </h1>
          <LogoContainer list={technologiesData} />
        </div>
      </div>
    );
  }
}

export default Technologies;