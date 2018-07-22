

import React, { Component } from 'react';
import style from './style.css';
//import Register from 'containers/Register/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import {PostLogin} from './PostLogin'


class Login extends Component {

constructor(props){
  super(props);
  this.state ={
    email:'',
    password:''
  }
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this)

}

login(){
  PostLogin('login', this.state).then ((result) =>{
    let responseJson = result;
  });
}

onChange(e){
this.setState({[e.target.name]:e.target.value})
console.log(this.state)
}

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h2>login here</h2>
          <label>email</label>
          <input type="email" name="email" placeholder="inser your username here" onChange={this.onChange}/>
          <label>password</label>
          <input type="password" name="password" placeholder="inser your password" onChange={this.onChange} />
          <input type="submit" value="login" className="buttonlogin" onClick={this.login}/>

        </div>
      </div>
    )
  }
}

export default Login;
// class LoginPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//       error: '',
//     };

//     this.handlePassChange = this.handlePassChange.bind(this);
//     this.handleUserChange = this.handleUserChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.dismissError = this.dismissError.bind(this);
//   }

//   dismissError() {
//     this.setState({ error: '' });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();

//     if (!this.state.username) {
//       return this.setState({ error: 'Username is required' });
//     }

//     if (!this.state.password) {
//       return this.setState({ error: 'Password is required' });
//     }

//     return this.setState({ error: '' });
//   }

//   handleUserChange(evt) {
//     this.setState({
//       username: evt.target.value,
//     });
//   };

//   handlePassChange(evt) {
//     this.setState({
//       password: evt.target.value,
//     });
//   }

//   render() {
//     // NOTE: I use data-attributes for easier E2E testing
//     // but you don't need to target those (any css-selector will work)

//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           {
//             this.state.error &&
//             <h3 data-test="error" onClick={this.dismissError}>
//               <h5 onClick={this.dismissError}>✖</h5>
//               {this.state.error}
//             </h3>
//           }
//           <label>User Name</label>
//           <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

//           <label>Password</label>
//           <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

//           <button type="submit" value="Log In" data-test="submit" >Log In</button>


//         </form>
//       </div>
//     );
//   }
// }

// export default LoginPage;

// import React, {Component} from 'react'
// import Card, {CardActions, CardContent} from 'material-ui/Card'
// import { Button } from 'material-ui'
// import { TextField } from 'material-ui'
// import { Typography }from 'material-ui'
// import { Icon }from 'material-ui'
// import PropTypes from 'prop-types'
// import {withStyles} from 'material-ui'
// import auth from './../../auth/auth-helper'
// import {Redirect} from 'react-router-dom'
// import {signin} from './../../auth/api-auth.js'

// const styles = theme => ({
//   card: {
//     maxWidth: 600,
//     margin: 'auto',
//     textAlign: 'center',
//     marginTop: theme.spacing.unit * 5,
//     paddingBottom: theme.spacing.unit * 2
//   },
//   error: {
//     verticalAlign: 'middle'
//   },
//   title: {
//     marginTop: theme.spacing.unit * 2,
//     color: theme.palette.openTitle
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 300
//   },
//   submit: {
//     margin: 'auto',
//     marginBottom: theme.spacing.unit * 2
//   }
// })

// class Signin extends Component {
//   state = {
//       email: '',
//       password: '',
//       error: '',
//       redirectToReferrer: false
//   }

//   clickSubmit = () => {
//     const user = {
//       email: this.state.email || undefined,
//       password: this.state.password || undefined
//     }

//     signin(user).then((data) => {
//       if (data.error) {
//         this.setState({error: data.error})
//       } else {
//         auth.authenticate(data, () => {
//           this.setState({redirectToReferrer: true})
//         })
//       }
//     })
//   }

//   handleChange = name => event => {
//     this.setState({[name]: event.target.value})
//   }

//   render() {
//     const {classes} = this.props
//     const {from} = this.props.location.state || {
//       from: {
//         pathname: '/'
//       }
//     }
//     const {redirectToReferrer} = this.state
//     if (redirectToReferrer) {
//       return (<Redirect to={from}/>)
//     }

//     return (
//       <Card className={classes.card}>
//         <CardContent>
//           <Typography type="headline" component="h2" className={classes.title}>
//             Sign In
//           </Typography>
//           <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin="normal"/><br/>
//           <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange('password')} margin="normal"/>
//           <br/> {
//             this.state.error && (<Typography component="p" color="error">
//               <Icon color="error" className={classes.error}>error</Icon>
//               {this.state.error}
//             </Typography>)
//           }
//         </CardContent>
//         <CardActions>
//           <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
//         </CardActions>
//       </Card>
//     )
//   }
// }

// Signin.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(Signin)

