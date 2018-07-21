/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
//import H2 from 'components/H2';
//import ReposList from 'components/ReposList';
//import AtPrefix from './AtPrefix';
//import CenteredSection from './CenteredSection';
//import Form from './Form';
//import Input from './Input';
//import Section from './Section';
import messages from './messages';
//import { loadRepos } from '../App/actions';
// /import { changeUsername } from './actions';
//import { makeSelectUsername } from './selectors';
// import reducer from './reducer';
//import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

