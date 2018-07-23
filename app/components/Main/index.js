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
                login as
              </p>
    
              <a className="btn waves-light waves-effect m-r-16">Patient</a>
              <a className="btn waves-light waves-effect">Doctor</a>
            </div>
          </div>
        </section>
      );
    };
  }    
export default Main;
