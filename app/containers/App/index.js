/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import Doctor from 'containers/Doctor/Loadable';
import PatientList from 'containers/PatientList/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPatient from 'containers/RegisterPatient/Loadable';
import AddAppointment from 'containers/addAppointment/Loadable';
import AdminHomePage from 'containers/AdminHomePage/Loadable';
import Med from 'containers/Medication/Loadable'
import AddMedication from 'containers/addMedication/Loadable'


const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%itHealth"
        defaultTitle="itHealth"
      >
        <meta name="description" content="itHealth" />
      </Helmet>
      
   
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/doctorPanel" component={Doctor} />
        <Route  path="/patientList" component={PatientList} />
        <Route  path="/patients/login" component={LoginPage} />
        <Route path= '/patients/register' component={RegisterPatient}/>
        <Route path = '/patients/add-appointment' component={AddAppointment}/>
        <Route path = '/admin' component={AdminHomePage}/>
        <Route path = '/medications' component={Med}/>
        <Route path = '/add-medication' component={AddMedication}/>
        <Route component={NotFoundPage} />

        
      </Switch>
      
      
</AppWrapper>
      );
    }
