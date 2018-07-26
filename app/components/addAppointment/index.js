import React, { Component } from 'react';
import axios from 'axios';
// import { Route, Switch, NavLink, Link } from 'react-router-dom';
import api from '../api';
// import './AddCountry.css';


class AddCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: "",
      date: "",
      reason: "",
      place: "",
      note: "",
      patient: "",
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
      _id: this.state._id,
      date: this.state.date,
      reason: this.state.reason,
      place : this.state.place,
      patient: this.state.patient,
    }
    api.postCountries(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          _id: "",
          date: "",
          reason: "",
          place: "",
          note: "",
          patient: "",
          message: `Your appointment at '${this.state.date}' has been created`
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
      <div className="AddCountry">
        <h2>Add country</h2>
        <form>
          Name: <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange("name", e) }} /> <br />
          Capitals <input type="text" value={this.state.capitals} onChange={(e) => { this.handleInputChange("capitals", e) }} /> <br />
          Area <input type="number" value={this.state.area} onChange={(e) => { this.handleInputChange("area", e) }} /> <br />
          Description <textarea value={this.state.description} cols="30" rows="10" onChange={(e) => { this.handleInputChange("description", e) }} ></textarea> <br />
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

export default AddCountry;
