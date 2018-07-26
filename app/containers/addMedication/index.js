import React, { Component } from 'react';
import axios from 'axios';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../../api/medication';
// import './AddCountry.css';


class addAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      usage: "",
      dosage: "",
      warning: "",
      note: "",
      price :'',
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.name)
    let data = {
      name:  this.state.name,
      usage: this.state.usage,
      warning: this.state.warning,
      note: this.state.note,
      price: this.state.price,
    }
    api.addMedication(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name:"",
      usage: "",
      dosage: "",
      warning: "",
      note: "",
      price :'',
          message: `The Medication  has been created`
        })
        setTimeout(() => {
          this.setState({
            message: null
          })
        }, 2000)
      })
      .catch(err => {
        console.log('ERROR')
      })
  }
  render() {                
    return (
      <div className=" addAppointment ">
        <h2>Add Medication</h2>
        <form>
          name: <input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/>
          usage:  <input type="text" value={this.state.usage} onChange={(e) => {this.handleInputChange("usage", e)}} /> <br/>
          dosage: <input type="text" value={this.state.dosage} onChange={(e) => {this.handleInputChange("dosage", e)}}  /> <br/>
          warning: <input type="text" value={this.state.warning} onChange={(e) => {this.handleInputChange("warning", e)}}  /> <br/>
          another note <textarea value={this.state.note} cols="30" rows="10" onChange={(e) => {this.handleInputChange("note", e)}} ></textarea> <br/>
          price <input type="number" value={this.state.price} onChange={(e) => {this.handleInputChange("price", e)}}  /> <br/>
          <button onClick={(e) => this.handleClick(e)}>Create Medicine</button>
        </form>
        <div style={{
          margin: 10,
          backgroundColor: "red",
          display: this.state.message ? "block" : "none"
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default  addAppointment ;
