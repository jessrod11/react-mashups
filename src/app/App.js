import React, { Component } from 'react';

import connection from '../FirebaseRequests/connection';
import animalRequest from '../FirebaseRequests/animals';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  }

  formSubmitEvent = (newAnimalListing) => {
    animalRequest.postRequest(newAnimalListing)
      .then(() => {
        animalRequest.getRequest()
          .then((animals) => {
            this.setState({animals});
          });
      })
      .catch((err) => {
        console.error('error while posting Animal Listing', err);
      });
  }

  componentDidMount () {
    connection();
    animalRequest.getRequest()
      .then((animals) => {
        this.setState({animals});
      })
      .catch((error) => {
        console.error('error in GET animal Request', error);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-md-8 text-center">
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-md-4 text-center">
          <Form onSubmit={this.formSubmitEvent}/>
        </div>
      </div>
    );
  }
}

export default App;
