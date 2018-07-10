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

const postRequest = (animal) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, animal)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {getRequest, postRequest};
