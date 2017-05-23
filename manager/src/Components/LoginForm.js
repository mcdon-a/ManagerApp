import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    onChangeText={this.onEmailChange.bind(this)} 
                    label="Email" 
                    placeholder="email@example.com"
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    secureTextEntry 
                    label="Password" 
                    placeholder="mypassword123"
                    onChangeText={this.onPasswordChange.bind(this)} 
                    value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { auth } = state;
    const { email, password } = auth;
    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
