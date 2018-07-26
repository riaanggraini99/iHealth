import React, { Component } from 'react';
import api from '../../api/appointment';
import Header from 'components/adminHeader/index';
import Sidebar from 'components/adminSidebar/index';
import Feature from 'components/Feature/index';

import styled from 'styled-components'

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

class Appointments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: []
    }
  }
  componentDidMount() {
    api.getAppointment()
      .then( appointments => {
        console.log(appointments)
        this.setState({appointments:appointments.appointment})
      })
      .catch(err => console.log(err))
  }
  render() {                
    return (

        <div className="table">
          <Header/>
        <Sidebar />
        <AppWrapper>
    <table className="table table-striped table-padding">
          <thead>
              <tr className="heading">
                  <th className="col-md-1">id Appointment</th>
                  <th className="col-md-1">date</th>
                  <th className="col-md-1">reason</th>
                  <th className="col-md-1">note</th>
                  <th className="col-md-1">patient name</th>
                  <th className="col-md-1">Action</th>
                 
               </tr>
           </thead>
           <tbody>
           {this.state.appointments && this.state.appointments.map((list, index) => {
               return (
                 <tr key={index}>
                    <td>{list._id}</td>
                    <td>{list.date}</td>
                    <td>{list.reason}</td>
                    <td>{list.note}</td>
                    <td>{list.patient}</td>
                    <td>{list.disease}</td>
                    <td><button type="button" onClick={(e) => this.handleEdit(list.AppointmentId)}><i className="fa fa-pencil" aria-hidden="true">edit</i></button>
                    <button type="button" onClick={(e) => this.deleteAppointment(list.AppointmentId)}><i className="fa fa-trash" aria-hidden="true"></i>delete</button></td>
                   </tr>
                )

             })
            }
            </tbody>
     </table>
     </AppWrapper>
</div>

 
    );
  }
}




export default Appointments;