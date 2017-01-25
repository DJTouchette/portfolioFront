import React, { Component } from 'react';
import CardList from '../../components/Card/index';
import data from './projectData';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <div className="bg"></div>
          <div className="projectsContent">
            <CardList list={data} />
          </div>
      </div>
    );
  }
}

export default Projects;
