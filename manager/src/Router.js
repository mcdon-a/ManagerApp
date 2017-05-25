import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';


const RouterComponent = () => {
    return (
        //This may have to be an android specific value for margin top
        <Router sceneStyle={{ marginTop: 50 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
                <Scene 
                onRight={() => console.log('Right!')}
                rightTitle='Add'
                key="EmployeeList" 
                component={EmployeeList} 
                title="Employee List" 
                />
                <Scene 
                key="EmployeeCreate"
                component={EmployeeCreate}
                title="Employee Create"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent
;
