import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;
    const animalCardComponents = animals.map((animal) => {
      return (
        <div>
          <h2 key={animal.id}>{animal.name}</h2>
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
