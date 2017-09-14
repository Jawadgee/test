import React from 'react';
import PropTypes from 'prop-types';

import ErrorLine from './ErrorsLine';

class HomePage extends React.Component{
    state = {
        data: {},
        errors: {}
    };

    onChange = e => {
        this.setState({data:{...this.state.data, [e.target.name]: e.target.value}});
    }
    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
                .catch(err => this.setState({errors: err.response.data.errors}));
        }
    }
    validate = (data) => {
        const errors = {};
        const EmailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!EmailCheck.test(data.email)) errors.email = 'Invalid Email';
        if(!data.password) errors.password = 'Invalid Password';
        return errors;
    }

    render(){
        let {errors} = this.state;
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    {errors.global && (<p style={{color: 'red'}}>nooooo {errors.global}</p>)}
                    <p>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="info@example.com"
                        onChange={this.onChange}/>
                    </p>
                    {errors && <ErrorLine error={errors.email}/>}
                    <p>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            onChange={this.onChange}/>
                    </p>
                    {errors && <ErrorLine error={errors.password}/>}
                    <p><input type="submit" value="submit"/></p>
                </form>
            </div>
        )
    }
}

HomePage.PropTypes = {
    submit: PropTypes.func.isRequired
}


export default HomePage;