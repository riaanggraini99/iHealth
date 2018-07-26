import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/appointment',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
    service: service,
    
    addAppointment(data) {
        return service
          .post('/', data)
          .then(res => res.data)
          .catch(errHandler);
      },
      getAppointment() {
        return service
 
        .get('/')
        .then(res => res.data)
        .catch(errHandler);
      },

      
};