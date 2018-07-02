import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;
    const animalCardComponents = animals.map((animal) => {
      return (
        <div className= "row">
          <div className="col-md-4">
            <h2 key={animal.id}>{animal.name}</h2>
            <img class="animal-img" src={animal.imgUrl} alt="animal pic"/>
            <h3>{animal.description}</h3>
          </div>
        </div>
      );
    });

    return (
      <div className="Animals">
        <h2>Animals</h2>
        <div>
          <h1>{animalCardComponents}</h1>
        </div>
      </div>
    );
  };

}

export default Animals;
