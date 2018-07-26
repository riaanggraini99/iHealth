import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Switch, Route } from 'react-router-dom';
import gambar from '../../images/homepage.jpg';

class Main extends React.Component {
    render() {
      return (
        <section
          id="hero"
          className="blue lighten-4"
          style={{ backgroundImage: 'url(' + gambar + ')'}}
        >
          <div className="container valign-wrapper jc-center">
            <div className="valign center-align white-text">
              <p className="flowtext hide-on-small-only">We available to solve your health problem anywhere</p>
              <h3>
                Welcome to ithealth
              </h3>
    
              <p className="big">
                How can we help you?
              </p>
    
              <a href="/patients/add-appointment" className="btn waves-light waves-effect">Make Appointment</a>
              <a href='/service'className="btn waves-light waves-effect">service  </a>
              <a href = 'medical-records'className="btn waves-light waves-effect">Medical records</a>
              <a href='/billing' className="btn waves-light waves-effect">Billing   </a>

            </div>
          </div>
        </section>
      );
    };
  }    
export default Main;
