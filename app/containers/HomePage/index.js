// // /*
// //  * HomePage
// //  *
// //  * This is the first thing users see of our App, at the '/' route
// //  *
// //  * NOTE: while this component should technically be a stateless functional
// //  * component (SFC), hot reloading does not currently support SFCs. If hot
// //  * reloading is not a necessity for you then you can refactor it and remove
// //  * the linting exception.
// //  */


// // import React from 'react';
// // import ReactDOM from 'react-dom'
// // import PropTypes from 'prop-types';
// // import { Helmet } from 'react-helmet';
// // import { FormattedMessage } from 'react-intl';
// // import { connect } from 'react-redux';
// // import { compose } from 'redux';
// // import { createStructuredSelector } from 'reselect';
// // import form_login from 'components/login_form/index.js'
// // import injectReducer from 'utils/injectReducer';
// // import injectSaga from 'utils/injectSaga';
// // import {
// //   makeSelectRepos,
// //   makeSelectLoading,
// //   makeSelectError,
// // } from 'containers/App/selectors';
// // //import H2 from 'components/H2';
// // //import ReposList from 'components/ReposList';
// // //import AtPrefix from './AtPrefix';
// // //import CenteredSection from './CenteredSection';
// // //import Form from './Form';
// // //import Input from './Input';
// // //import Section from './Section';
// // import messages from './messages';
// // //import { loadRepos } from '../App/actions';
// // // /import { changeUsername } from './actions';
// // //import { makeSelectUsername } from './selectors';
// // // import reducer from './reducer';
// // //import saga from './saga';

// // /* eslint-disable react/prefer-stateless-function */
// // const App = props => (
// // 	<SignUpContainer />
// // );

// // export default class HomePage extends React.PureComponent {
// // 	render() {
// // 	  return (
// // 		  <h1>
// // 		<FormattedMessage {...messages.header} />
// // 		<form_login />
// // 	</h1>
// // 	  );
// // 	}
// //   }
  



// import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';

// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
// import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
// import reducer from './reducer';
// import saga from './saga';

// /* eslint-disable react/prefer-stateless-function */
// export class HomePage extends React.PureComponent {
//   /**
//    * when initial state username is not null, submit the form to load repos
//    */
//   componentDidMount() {
//     if (this.props.username && this.props.username.trim().length > 0) {
//       this.props.onSubmitForm();
//     }
//   }

//   render() {
//     const { loading, error, repos } = this.props;
//     const reposListProps = {
//       loading,
//       error,
//       repos,
//     };

//     return (
//       <article>
//         <Helmet>
//           <title>Home Page</title>
//           <meta
//             name="description"
//             content="A React.js Boilerplate application homepage"
//           />
//         </Helmet>
//         <div>
//           <CenteredSection>
//             <H2>
//               <FormattedMessage {...messages.startProjectHeader} />
//             </H2>
//             <p>
//               <FormattedMessage {...messages.startProjectMessage} />
//             </p>
//           </CenteredSection>
//           <Section>
//             <H2>
//               <FormattedMessage {...messages.trymeHeader} />
//             </H2>
//             <Form onSubmit={this.props.onSubmitForm}>
//               <label htmlFor="username">
//                 <FormattedMessage {...messages.trymeMessage} />
//                 <AtPrefix>
//                   <FormattedMessage {...messages.trymeAtPrefix} />
//                 </AtPrefix>
//                 <Input
//                   id="username"
//                   type="text"
//                   placeholder="mxstbr"
//                   value={this.props.username}
//                   onChange={this.props.onChangeUsername}
//                 />
//               </label>
//             </Form>
//             <ReposList {...reposListProps} />
//           </Section>
//         </div>
//       </article>
//     );
//   }
// }

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func,
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

import React, { Component } from 'react';
import style from './style.css';
//import Register from 'containers/Register/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <h5 onClick={this.dismissError}>✖</h5>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
		 	
          <button type="submit" value="Log In" data-test="submit" >Log In</button>
		  
	  
        </form>
      </div>
    );
  }
}

export default LoginPage;
