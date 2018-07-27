import axios from 'axios';



import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/medication',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getMedication() {
    return service

      .get('/')
      .then(res => res.data)
      .catch(errHandler);
  },

  addMedication(data) {
    return service
      .post('/', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  detailMedication() {
    return service
      .get('/', +  +this.props.match.params.id)
    console.log(medicationId)
      .then(res => res.data)
      .catch(errHandler);
  },
  deleteMedication() {
    return service
      .delete('/${this.state.id}')
      .then(res => res.data)
      .catch(errHandler)

  },
  editMedication(){
    return service
    .put('/${$this.state.id}')
    .then(res => res.data)
    .catch(errHandler)
      }

};