import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './header.css';
import { Switch, Route } from 'react-router-dom';


/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
    render() {
      return (
        <div className="test">
    <h1>Please login to talk to your doctor</h1>
        </div>
        
      );
    }
  }

  
  export default  Header;