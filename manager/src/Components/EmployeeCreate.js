import React, { Component } from 'react';
import { CardSection, Input, Button, Card } from './common';
import { connect } from 'react-redux';
import { EmployeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.EmployeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone"
                    placeholder="555-555-555"
                    value={this.props.phone}
                    onChangeText={value => this.props.EmployeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }; 
};

export default connect(mapStateToProps, { EmployeeUpdate })(EmployeeCreate);

