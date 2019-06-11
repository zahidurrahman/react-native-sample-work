import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,FlatList, TouchableOpacity,ActivityIndicator, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';



export default class DeleteDetails extends Component {





    render() {


        return(


            <View style={{flex: 1}}>
                <Text>{this.props.text}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20

            },

        TextInputStyleClass:
            {

                textAlign: 'center',
                height: 40,
                backgroundColor : "#fff",
                borderWidth: 1,
                borderColor: '#009688',
                borderRadius: 7 ,
                marginBottom: 10,
                width: '95%'
            },

        TouchableOpacityStyle:
            {
                paddingTop:10,
                paddingBottom:10,
                backgroundColor:'#009688',
                marginBottom: 20,
                width: '95%',
                borderRadius: 7 ,

            },

        TextStyle:
            {
                color: '#fff',
                textAlign: 'center',
                fontSize: 18
            },

        ActivityIndicatorStyle:{

            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'

        },
        lightText:{
            textAlign: 'left',
            fontSize: 18,
            marginLeft:10,
            color: '#fff',
        },
        MainContainer2:
            {
                flex: 1,
                margin: 20

            },
        list:{
            paddingTop:10,
            paddingBottom:10,
            backgroundColor:'#009688',
            marginBottom: 20,
            width: '95%',
            borderRadius: 7 ,
        },

    });