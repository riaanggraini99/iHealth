import React, { Component } from 'react';
import api from '../../api/medication';
import styled from 'styled-components'
import Header from 'components/adminHeader/index';

import Sidebar from 'components/adminSidebar/index';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;
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
      this.setState({medications: medications.medication})
      
    })
    .catch(err => console.log(err))
  }
  
  render() {                
    return (
      <div className=" Medications">
      <Header />
        <AppWrapper>
      <h2>List of Medicine</h2>
        {this.state.medications.map((c, i) => <li key={i}>{c.name}</li>)}         
      </AppWrapper >
        <Sidebar/>
      </div>
    );
  }
}

export default Medications;