import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { EmployeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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

                <CardSection // This won't automatically go. It needs an override in the original file
                style={{ flexDirection: 'column' }}
                >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                    //The flex 1 style only works if the flexDirection is row
                    style={{ marginLeft: 15 }}
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
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        marginLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { EmployeeUpdate })(EmployeeForm);
