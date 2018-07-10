import React from 'react';
import './Form.css';

class Form extends React.Component {
  render () {
    return (
      <div>
        <h2>Add an Animal below:</h2>
        <form className="Form">
          <div className="form-group">
            <div className="col-m-10">
              <input type="text" className="form-control text-center" placeholder="Name..."/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-m-10">
              <input type="text" className="form-control text-center" placeholder="Image URL..."/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-m-10">
              <textarea cols="30" rows="10" className="text-styles text-center" placeholder="Add Description..."></textarea>
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
