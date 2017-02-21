import React, { Component } from 'react';
import './Home.css';
import { typeText } from './helpers';
import postFetch from '../Contact/helpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: undefined,
    };
  }

  componentDidMount() {
    const body = { name: 'Visit', email: 'me@me.com', description: 'visit plus 1', message: 'New visit', budget: 0 };
    postFetch('https://damientouchette.io/api/v1/quote', body).then((json) => {
      console.log(json);
    });

    const { action } = this.props.params;
    if (action === undefined) typeText();
    // this.setState({ action });
    //
    // console.log(this.props.params);
    // typeText();
  }

  render() {
    const { action } = this.props.params;
    // if (action === undefined) typeText();
    return (
      <div>
        <div className="bg"></div>
          { action ?
            <div id="iframe-container">
              <iframe id="CV" src="https://www.visualcv.com/1lz1cq4kuiq"
              style={{}}
              frameBorder="0"
              ></iframe>
            </div> :

            <div className="content">
              <div className="changeTextContainer">
                <h1 id="changeText">Hello World.</h1>
              </div>
            </div>
          }
      </div>
    );
  }
}

export default Home;
