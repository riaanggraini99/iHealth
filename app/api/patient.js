import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/patient',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
    service: service,
    
    getPatients() {
      return service
        .get('/')
        .then(res => res.data)
        .catch(errHandler);
    },
  
    postPatient(data) {
      return service
        .post('/', data)
        .then(res => res.data)
        .catch(errHandler);
    },
  
  signin(email, password) {
    return service
      .post('/signin', {
        email,
        password,
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem('patient', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },
  signup(patientInfo) {
    return service
      .post('/signup', patientInfo)
      .then(res => res.data)
      .catch(errHandler);
  },
  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('patient');
  },
  loadPatient() {
    const patientData = localStorage.getItem('patient');
    if (!patientData) return false;
    const patient = JSON.parse(patientData);
    if (patient.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + patient.token;
      return patient;
    }
    return false;
  },
  
  isLoggedIn() {
    return localStorage.getItem('patient') != null
  },
  
  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler);
  },
};