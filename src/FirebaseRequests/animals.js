import axios from 'axios';

import constants from '../constants';

const getRequest = () => {
  return new Promise ((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((results) => {
        const animalsArray = [];
        if (results.data !== null) {
          Object.keys(results.data).forEach((key) => {
            results.data[key].id = key;
            animalsArray.push(results.data[key]);
          });
        }
        resolve(animalsArray);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {getRequest};
