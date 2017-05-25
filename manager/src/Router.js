import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';


const RouterComponent = () => {
    return (
        //This may have to be an android specific value for margin top
        <Router sceneStyle={{ marginTop: 50 }}>
            <Scene key="EmployeeList" component={EmployeeList} title="Employee List"  />
            <Scene key="login" component={LoginForm} title="Login"  />
        </Router>
    );
};

export default RouterComponent
;
