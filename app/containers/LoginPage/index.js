
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react';
import api from '../../api/patient';


class Login extends Component {
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
    api.signin(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Login">
        <h2>Login</h2>
        <Form>
        
      <Form.Field>
          Email: <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
    </Form.Field>
      <Form.Field>
          Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
    </Form.Field>

          <Button onClick={(e) => this.handleClick(e)}>Login</Button>
      </Form>
        
      </div>
    );
  }
}



export default Login;
