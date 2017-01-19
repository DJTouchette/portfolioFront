import React, { Component } from 'react';
import Menu from '../../components/Menu/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

export default App;
