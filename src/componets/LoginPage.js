import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import LoginForm from './LoginForm';

class LoginPage extends React.Component{

    submit = (data) =>
        this.props.login(data).then(() => this.props.history.push("/"));

    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}


LoginForm.PropTypes = {
    history: PropTypes.shape({
        path: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}


export default connect(null, { login })(LoginPage);