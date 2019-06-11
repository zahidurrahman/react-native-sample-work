import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard ,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {Actions} from 'react-native-router-flux';

export default class Register extends Component {

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
    handleFocus = () => this.setState({isFocused: true})
    handleBlur = () => this.setState({isFocused: false})
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

                <Icon style={{flex:1,flexDirection:'row',}} name="ios-search" size={20} color="#000"/>

                <TextInput
                    // style={styles.inputBox}
                    style={{
                        width: 300,
                        flex:1,
                        flexDirection:'row',
                        // backgroundColor: '#eeeeee',
                        borderRadius: 0,
                        paddingHorizontal: 16,
                        fontSize: 16,
                        color: '#3498DB',
                        marginVertical: 10,
                        borderBottomWidth:1,
                        borderBottomColor: this.state.isFocused ? '#3498DB' : 'black',
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={(email) => this.setState({email})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor = "#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}/>

                <TextInput
                    // style={styles.inputBox}
                    style={{
                        width: 300,
                        // backgroundColor: '#eeeeee',
                        borderRadius: 0,
                        paddingHorizontal: 16,
                        fontSize: 16,
                        color: '#3498DB',
                        marginVertical: 10,
                        borderBottomWidth:1,
                        borderBottomColor: this.state.isFocused ? '#3498DB' : 'black',
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={(password) => this.setState({password})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#002f6c"
                    ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        // backgroundColor: '#eeeeee',
        borderRadius: 0,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10,
        borderBottomWidth:1,

    },
    button: {
        width: 300,
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
        marginBottom:20,
    },
    searchSection: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

});