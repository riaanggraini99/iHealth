import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './header.css';
import { Switch, Route } from 'react-router-dom';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
    render() {
        return (
          <nav className="teal lighten-1">
            <div className="nav-wrapper">
              <a href="" className="brand-logo left">Logo</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse right">
                <i className="material-icons">menu</i>
              </a>
              <ul id="mobile-demo" className="right hide-on-med-and-down">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Who we are</a>
                </li>
                <li>
                  <a href="">logout</a>
                </li>
              </ul>
            </div>
          </nav>
        );
      };
    }

  
      export default Header;