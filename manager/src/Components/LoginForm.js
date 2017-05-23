import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text){
        
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input onChangeText={this.onEmailChange.bind(this)} label="Email" placeholder="email@example.com" />
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

export default LoginForm;
