import React, { Component } from 'react';
import api from '../../api/patient';

class addPatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/patientList") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {
    return (
      <div className="Signup">
        <h2>create new patient here</h2>
        <form>
          name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Email: <input type="text" value={this.state.email} onChange={(e) => { this.handleInputChange("email", e) }} /> <br />
          address: <input type="text" value={this.state.address} onChange={(e) => { this.handleInputChange("adress", e) }} /> <br />

          Phone: <input type="number" value={this.state.phone} onChange={(e) => { this.handleInputChange("phone", e) }} /> <br />

          Password: <input type="password" value={this.state.password} onChange={(e) => { this.handleInputChange("password", e) }} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default addPatient;
