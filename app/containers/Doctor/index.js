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


import Sidebar from 'components/SideBar/index';

import Footer from 'components/Footer/index';



import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function Doctor() {
  return (
    <AppWrapper>
<Helmet
titleTemplate="%itHealth"
defaultTitle="itHealth"
>
<meta name="description" content="itHealth" />
</Helmet>
  
     
  <p1>aku disni</p1>
      
</AppWrapper>
      );
    }
