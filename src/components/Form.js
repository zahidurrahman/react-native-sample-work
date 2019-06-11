import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard ,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {Actions} from 'react-native-router-flux';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }
    // this one for onclick test input color change
    state: {
        isFocused: true
    }

    // this one for onclick test input color change

    saveData =async()=>{
        const {email,password} = this.state;

        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }

        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Email and Password does not exist!');
                    }
                }

            }catch(error)
            {
                alert(error);
            }
        }
    }

    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }

    render() {
        return(

            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    height: 40,
                    width: 350,
                    borderRadius: 0 ,
                    margin: 10,
                }}

                >
                    <Icon style={styles.ImageStyle} name="ios-mail" size={20} color="#3498DB"/>
                    <TextInput
                        style={{
                            flex:1,
                        }}

                        placeholder="Enter Your Email Here"
                    />

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    height: 40,
                    width: 350,
                    borderRadius: 0 ,
                    margin: 10,

                }}
                >
                    <Icon style={styles.ImageStyle} name="ios-lock" size={20} color="#3498DB"/>
                    <TextInput
                        style={{
                            flex:1,

                        }}
                        secureTextEntry={true}
                        placeholder="Enter Your Password Here"
                    />

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginTop:0,

    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#000',
        height: 40,
        borderRadius: 0 ,
        margin: 10
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        alignItems: 'center'
    },
    button: {
        width: 350,
        backgroundColor: '#3498DB',
        borderRadius: 0,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logo:{
        width:350,
        marginBottom:40,
    },

});