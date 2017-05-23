import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
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
                    <Input secureTextEntry label="Password" placeholder="mypassword123" />
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
    return {
        email: state.auth.email
    };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
