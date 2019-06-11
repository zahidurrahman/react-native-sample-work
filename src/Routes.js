import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import LeaveApplication from './pages/LeaveApplication';
import Calender from './pages/Calender';
import Walkthrough from './pages/Walkthrough';
import EditDetials from './pages/EditDetails';
import DeleteDetials from './pages/DeleteDetails';


import About from './scenes/About';
import Faq from './scenes/Faq';
import Notification from './scenes/Notification';
import Settings from './scenes/Settings';


export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                    hideNavBar={false}
                    navigationBarStyle={{backgroundColor: 'none',}}
                    titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup}  hideNavBar={false} />
                    <Scene key="leave" component={LeaveApplication}  hideNavBar={false} />
                    <Scene key="calender" component={Calender} hideNavBar={false} />
                    <Scene key="walkthrough" component={Walkthrough} hideNavBar={true} />
                    <Scene key="editdetails" component={EditDetials} hideNavBar={true} />
                    <Scene key="deletedetails" component={DeleteDetials} hideNavBar={true} />


                    <Scene
                        key="rootTabBar"
                        tabs={true}
                        tabBarStyle={{
                            backgroundColor: '#3498DB',

                        }}
                        labelStyle={{
                            color:'#3498DB',
                            fontSize: 16,
                        }}
                        hideNavBar={true}
                    >
                        <Scene key="home" component={Home}
                               icon={({ focused }) => (
                                   <Icon style={styles.iconstyle}
                                        size={20} name="home"
                                        color={focused ? 'white' : '#A9CCE3'}
                                   />
                               )}
                               tabBarLabel="HOME" hideNavBar={true}  initial />
                        <Scene key="notification" component={Notification}

                               icon={({ focused }) => (
                                   <Icon style={styles.iconstyle}
                                         size={20} name="bell"
                                         color={focused ? 'white' : '#A9CCE3'}
                                   />
                               )}
                               tabBarLabel="NOTIFICATION" hideNavBar={true}
                        />
                        <Scene key="faq" component={Faq}
                               icon={({ focused }) => (
                                   <Icon style={styles.iconstyle}
                                         size={20} name="tasks"
                                         color={focused ? 'white' : '#A9CCE3'}
                                   />
                               )}
                               tabBarLabel="FAQ" hideNavBar={true}
                        />

                        <Scene key="about" component={About}

                               icon={({ focused }) => (
                                   <Icon style={styles.iconstyle}
                                         size={20} name="star"
                                         color={focused ? 'white' : '#A9CCE3'}
                                   />
                               )}
                               tabBarLabel="ABOUT" hideNavBar={true} />

                        <Scene key="settings" component={Settings}
                               icon={({ focused }) => (
                                   <Icon style={styles.iconstyle}
                                         size={20} name="cog"
                                         color={focused ? 'white' : '#A9CCE3'}
                                   />
                               )}
                               tabBarLabel="SETTINGS" hideNavBar={true}
                        />
                    </Scene>

                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    },
    iconstyle:{
        marginTop:20,

    }
}