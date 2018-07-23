import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Switch, Route } from 'react-router-dom';

class Footer extends React.Component {
    render() {
return (
    <section id="footer" className="teal lighten-1">
      <div className="container">
        <div className="row">
          <div className="col s3"></div>
          <div className="col s6 center-align white-text">
         itHealth
          </div>
          <div className="col s3"></div>
        </div>
      </div>
    </section>
  );
};
}
export default Footer;
