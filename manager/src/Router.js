import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';


const RouterComponent = () => {
    return (
        //This may have to be an android specific value for margin top
        <Router sceneStyle={{ marginTop: 50 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
                <Scene 
                onRight={() => Actions.EmployeeCreate()}
                rightTitle='Add'
                key="EmployeeList" 
                component={EmployeeList} 
                title="Employee List"
                initial 
                />
                <Scene 
                key="EmployeeCreate"
                component={EmployeeCreate}
                title="Create Employee"
                />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;

