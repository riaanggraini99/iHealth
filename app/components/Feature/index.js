import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Switch, Route } from 'react-router-dom';

class Feature extends React.Component {
    render() {
        return (
            <section id="features" className="grey lighten-4">
              <div className="container">
                <div className="row">
                  <div className="col m3"></div>
                  <div className="col m6 center-align">
                    <h3>What we can do for you</h3>
                  </div>
                  <div className="col m3"></div>
                </div>
                <div className="row">
                  <div className="col m3">
                    <i className="material-icons">create</i>
                    <h5>Pixel-Perfect Design</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim!</p>
                  </div>
                  <div className="col m3">
                    <i className="material-icons">devices</i>
                    <h5>Thoroughly Responsive</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim!</p>
                  </div>
                  <div className="col m3">
                    <i className="material-icons">build</i>
                    <h5>Timely Support</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim!</p>
                  </div>
                  <div className="col m3">
                    <i className="material-icons">mood</i>
                    <h5>Happy Clients</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim!</p>
                  </div>
                </div>
              </div>
            </section>
          );
        };       
}
export default Feature;
