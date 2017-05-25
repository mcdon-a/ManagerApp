import React, { Component } from 'react';
import { CardSection, Input, Button, Card } from './common';
import { connect } from 'react-redux';
import { EmployeeUpdate } from '../actions';
import { Picker } from 'react-native';

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

                <CardSection>
                    <Picker
                    style={{ flex: 1 }}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.EmployeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

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

