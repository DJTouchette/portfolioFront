import React, { Component } from 'react';
import { toMonokai, engineers, designer } from './helpers.js'
import Avatar from 'material-ui/Avatar';
import './About.css';

class About extends Component {
  componentDidMount() {
    // toMonokai('engineers', engineers);
    // toMonokai('designers', designer);
  }

  render() {
    return (
        <div>
          <div className="bg"></div>
          <div className="About">
            <div className="imgContainer">
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAZbAAAAJDI0YzQxZjU5LWQwMWUtNDhlYy1hOGI1LTdjODc2YzU1YjIxMg.jpg" alt="Damien Touchette"/>
            </div>
            <div className="textContainer">
              <h2>admin@damientouchette.io:~$ cat aboutme.txt</h2>
              <br/>
              <h2>For Engineers:</h2>
              <br/>
              <p id="engineers">{engineers}</p>
              <br/>
              <h2>For Designers:</h2>
              <br/>
              <p id="designers">{designer}</p>
              <br/>
              <h2>admin@damientouchette.io:~$ </h2>
              <div className="text"></div>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
