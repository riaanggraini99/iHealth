import axios from 'axios';

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
};