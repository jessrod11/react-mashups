import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="col-md-6 text-center">
          <Animals />
        </div>
        <div className="col-md-6 text-center">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
