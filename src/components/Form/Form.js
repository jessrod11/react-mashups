import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

const defaultAnimalListing = {
  name: '',
  imgUrl: '',
  description: '',
};

class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    newAnimalListing: defaultAnimalListing,
  }

  formFieldStringState = (name, e) => {
    const tempAnimalListing = {...this.state.newAnimalListing};
    tempAnimalListing[name] = e.target.value;
    this.setState({newAnimalListing: tempAnimalListing});
  };

  nameChange = e => {
    this.formFieldStringState('name', e);
  };

  imageChange = e => {
    this.formFieldStringState('imgUrl', e);
  };

  descriptionChange = e => {
    this.formFieldStringState('description', e);
  };

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newAnimalListing} = this.state;
    console.error('new animal', newAnimalListing);
    e.preventDefault();
    if (
      newAnimalListing.name &&
      newAnimalListing.imgUrl &&
      newAnimalListing.description
    ) {
      onSubmit(this.state.newAnimalListing);
      this.setState({newAnimalListing: defaultAnimalListing});
    } else {
      alert('Please complete all fields below to add an animal.');
    }
  }

  render () {
    const { newAnimalListing } = this.state;
    return (
      <div>
        <h2>Add an Animal below:</h2>
        <form onSubmit={this.formSubmit} className="Form">
          <div className="form-group">
            <div className="col-m-10">
              <input type="text" className="form-control text-center" placeholder="Name..." value={newAnimalListing.name} onChange={this.nameChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-m-10">
              <input type="text" className="form-control text-center" placeholder="Image URL..." value={newAnimalListing.imgUrl} onChange={this.imageChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-m-10">
              <textarea cols="30" rows="10" className="text-styles text-center" placeholder="Add Description..." value={newAnimalListing.description} onChange={this.descriptionChange}></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-3 col-md-offset-3">
              <button className="btn btn-info btn-lg button-styles">Add Animal</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
