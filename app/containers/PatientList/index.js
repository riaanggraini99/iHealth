import React, { Component } from 'react';
import api from '../../api/patient';
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

        <div className="table">
          <Header/>
        <Sidebar />
        <AppWrapper>
        <div>
            <h4><a href="/patients/add"><i> + add new patient</i></a></h4>
          </div>
    <table className="table table-striped table-padding">
          <thead>
              <tr className="heading">
                  <th className="col-md-1">Name</th>
                  <th className="col-md-1">Email</th>
                  <th className="col-md-1">Address</th>
                  <th className="col-md-1">ID</th>
                  <th className="col-md-1">Address</th>
                  <th className="col-md-1">Blood Type</th>
                  <th className="col-md-1">Occupation</th>
                  <th className="col-md-1">Disease</th>
                  <th className="col-md-1">Action</th>
                 
               </tr>
           </thead>
           <tbody>
           {
            this.state.patients.map((list, index) => {
               return (
                 <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.adress}</td>
                    <td>{list.ID}</td>
                    <td>{list.Blood_type}</td>
                    <td>{list.occupation}</td>
                    <td>{list.disease}</td>
                    <td><button type="button" onClick={(e) => this.handleEdit(list.medicationId)}><i className="fa fa-pencil" aria-hidden="true">edit</i></button>
                    <button type="button" onClick={(e) => this.deleteMedication(list.medicationId)}><i className="fa fa-trash" aria-hidden="true"></i>delete</button></td>
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



//       <div className=" Patientss">
//         <h2>List of Patient</h2>
//         {this.state.patients.map((c, i) => <li key={i}>{c.name}</li>)}
//       </div>
//     );
//   }
// }

export default Patients;