import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
export default class Faq extends Component {


    render() {

        return(

           <LottieView source={require('../../assets/images/animation1.json')} autoPlay loop={false} />
        )
    }
}
