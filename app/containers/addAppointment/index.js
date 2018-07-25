import React, { Component } from 'react';
import axios from 'axios';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../../api/appointment';
// import './AddCountry.css';


class addAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patientId:"",
      date: "",
      place: "",
      reason: "",
      note: "",
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
    console.log(this.state.name, this.state.description)
    let data = {
      patientId: this.state. patientId,
      name: this.state.name,
      capitals: this.state.capitals,
      area: this.state.area,
      description: this.state.description,
    }
    api.addAppointment(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          patientId:"",
          date: "",
          place: "",
          reason: "",
          note: "",
          message: `Your Appointment at '${this.state.date}' has been created`
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
        <h2>Add Appointment</h2>
        <form>
          date: <input type="date" value={this.state.date} onChange={(e) => {this.handleInputChange("date", e)}} /> <br/>
          place <input type="text" value={this.state.place} onChange={(e) => {this.handleInputChange("place", e)}}  /> <br/>
          reason <input type="number" value={this.state.reason} onChange={(e) => {this.handleInputChange("reason", e)}}  /> <br/>
          another note <textarea value={this.state.note} cols="30" rows="10" onChange={(e) => {this.handleInputChange("note", e)}} ></textarea> <br/>
          <button onClick={(e) => this.handleClick(e)}>Create country</button>
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
