import 'whatwg-fetch'

import'node-fetch';
import Promise from 'promise-polyfill';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const PostLogin = (patient) => {
    return fetch('https://localhost:3000/patient', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        // body: JSON.stringify(patient)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  export {
    PostLogin
  }