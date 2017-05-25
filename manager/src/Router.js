import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';


const RouterComponent = () => {
    return (
        //This may have to be an android specific value for margin top
        <Router sceneStyle={{ marginTop: 50 }}>
            <Scene key="login" component={LoginForm} title="Login" />
            <Scene key="EmployeeList" component={EmployeeList} title="Employee List" />
        </Router>
    );
};

export default RouterComponent
;
