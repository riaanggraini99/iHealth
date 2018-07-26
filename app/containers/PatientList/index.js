import React, { Component } from 'react';
import api from '../../api/patient';

class Patients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    }
  }
  componentDidMount() {
    api.getPatients()
      .then( patients => {
        console.log(patients)
        this.setState({patients: patients.patient})
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className=" Patientss">
        <h2>List of Patient</h2>
        {this.state.patients.map((c, i) => <li key={i}>{c.name}</li>)}
      </div>
    );
  }
}

export default Patients;