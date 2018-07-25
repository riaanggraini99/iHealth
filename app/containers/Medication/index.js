import React, { Component } from 'react';
import api from '../../api/medication';

import Header from 'components/adminHeader/index';

import Sidebar from 'components/adminSidebar/index';


class Medications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medications: []
    }
  }
  componentDidMount() {
    api.getMedication()
      .then( medications => {
        console.log( medications)
        this.setState({
          medications:  medicationts
        })
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (
      <div className=" Medications">
      <Header />
    <dl>
                  <dt>Medicine List</dt>
                  {this.state.medications.map((c, i) => <dd key={i}>{c.name}</dd>)}
                </dl>
        <Sidebar/>
      </div>
    );
  }
}

export default Medications;