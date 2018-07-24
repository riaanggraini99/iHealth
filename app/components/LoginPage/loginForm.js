import React from 'react';
import {Form, Button} from 'semantic-ui-react';

class LoginForm extends React.Component {
    state = {
        data:{
            email:'',
            password:''
        },
        loading : false,
        errors :{}

    };
    onChange = e => this.setState({data:{...this.state.data,[e.target.nama]:e.target.value}
    
    });

    render(){
        const {data} = this.state;
        return(
            <Form>
                <Form.Field>
                    <label httmlFor="email">Email</label>
                    <input
                    type="email"
                    id = "email"
                    name = "email"
                    placeholder = "example@example.com"
                    value={this.email}
                    onChange={this.onChange}
                    />
                    </Form.Field>

                    <Form.Field>
                    <label httmlFor="password">Password</label>
                    <input
                    type="password"
                    id = "password"
                    name = "password"
                    placeholder = "enter the secure password"
                    value={this.password}
                    onChange={this.onChange}
                    />
                    </Form.Field>

                  

                <Button primary>Login</Button>
                
                </Form>
        );
    }
}

export default LoginForm;