import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Contact.css';

const inputStyle = {
  fontSize:'3vw',
  color: 'white',
  textAlign: 'center',
};

const hint = {
  color: 'white',
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

  handleSubmit() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    
    if (name.length > 0 && message.length > 0) {
      if (!email.includes('@')) return this.setState({ err: 'Please enter a valid email address.'  });

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
          <h1>Hello my name is {<TextField id="name" style={{ width: '30%', textAlign: 'center' }} hintStyle={hint} inputStyle={inputStyle} hintText="Damien"/>},<br/><br/>
          I am contacting you because {<TextField id="message" style={{ width: '40%', textAlign: 'center' }}hintStyle={hint} inputStyle={inputStyle} hintText="I wanna chat"/>}.<br/><br/> 
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