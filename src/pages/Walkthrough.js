import React, { Component } from 'react';
import { StyleSheet,AppRegistry, Image,Text,Button, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';

import AppIntroSlider from 'react-native-app-intro-slider';
const slides = [
    {
        key: 'somethun',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../assets/images/1.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../assets/images/2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../assets/images/1.png'),
        backgroundColor: '#22bcb5',
    }
];
export default class Walkthrough extends Component {


    // this.state = {
    //     showRealApp: false
    // }
    _renderItem = (item) => {
        return (
            <View>
                {/*<Text>{item.title}</Text>*/}
                <Image source={item.image} />
                <Text>{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
       // this.setState({ showRealApp: true });
    }
    render() {
        //if (this.state.showRealApp) {
           // return <Walkthrough />;
       // } else {
            return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
        //}
    }
}