import React, { Component } from 'react';
import api from '../../api/medication';
import PropTypes from 'prop-types';
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

class Medication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medications: []
    }
  }
  componentDidMount() {
    api.getMedication()
      .then( medications => {
        console.log(medications)
        this.setState({medications : medications.medication})
      })
      .catch(err => console.log(err))
  }

  handleDelete(){
   api.deleteMedication(`/${this.state.id}`);
  
  }
  render (){

      return (
        <div className="table">
          <Header/>
        <Sidebar />
        <AppWrapper>
          <div>
            <h4><a href="add-medication"><i> + add new medicine</i></a></h4>
          </div>
    <table className="table table-striped table-padding">
          <thead>
              <tr className="heading">
                  <th className="col-md-1">Name</th>
                  <th className="col-md-1">Usage</th>
                  <th className="col-md-1">Dosage</th>
                  <th className="col-md-1">Warning</th>
                  <th className="col-md-1">Note</th>
                  <th className="col-md-1">Price</th>
                  <th className="col-md-1">Action</th>
                 
               </tr>
           </thead>
           <tbody>
           {
            this.state.medications.map((list, index) => {
               return (
                 <tr key={index}>
                    <td>{list.name}</td>
                    <td>{list.usage}</td>
                    <td>{list.dosage}</td>
                    <td>{list.warning}</td>
                    <td>{list.note}</td>
                    <td>{list.price}</td>
                    <td><button type="button" onClick={(e) => this.handleEdit(list.medicationId)}><i className="fa fa-pencil" aria-hidden="true">edit</i></button>
                    <button type="button" onClick={(e) => this.handleDelete(this._id)}><i className="fa fa-trash" aria-hidden="true"></i>delete</button></td>
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

export default Medication;