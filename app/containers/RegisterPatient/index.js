import React, { Component } from 'react';
import api from '../../api/patient';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
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
      email: this.state.email,

      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Email: <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>

          Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
