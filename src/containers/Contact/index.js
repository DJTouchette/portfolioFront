import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import postFetch from './helpers';
import './Contact.css';

const inputStyle = {
  fontSize:'3vw',
  color: 'white',
};

const hint = {
  color: 'rgba(255, 255, 255, 0.2)',
  fontSize:'3vw',
  textAlign: 'center',
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      submited: false,
    }
  }

  emailMe(body) {
    postFetch('https://damientouchette.io/api/v1/quote', body).then((json) => {
      console.log(json);
    });
  }

  getVals() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;

    return { name, message, email };
  }

  handleSubmit() {
    const { name, message, email } = this.getVals();

    if (name.length > 0 && message.length > 0) {
      if (!email.includes('@')) return this.setState({ err: 'Please enter a valid email address.'  });

      const body = { name, email, description: message, budget: 0, };
      this.emailMe(body);
      
      this.setState({ submited: true, err: null, name: name });
      return;
    }

    return this.setState({ err: 'Please do not leave fields empty.' })

  }

  render() {
    const { err, submited, name } = this.state;

    return (
      <div>
        <div className="bg"></div>
        <div className="contactContent">
        <form >
          <h1>Hello my name is {<TextField id="name" style={{ width: '30%', textAlign: 'center' }} hintStyle={hint} inputStyle={inputStyle} hintText="Damien"/>}<br/><br/>
          I am contacting you because {<TextField id="message" style={{ width: '30%', textAlign: 'center' }}hintStyle={hint} inputStyle={inputStyle} hintText="I wanna chat"/>}<br/><br/> 
          You can email me at {<TextField id="email" style={{ width: '50%', textAlign: 'center' }} inputStyle={inputStyle} hintStyle={hint} hintText="WebDevDamien@gmail.com"/>} 
          </h1>
        
        <div className="contactButton">

          <RaisedButton disabled={submited} onClick={this.handleSubmit.bind(this)} primary label={ err ? err : submited ? `Thanks for getting in touch ${name}` : 'email me' } />
        </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Contact;