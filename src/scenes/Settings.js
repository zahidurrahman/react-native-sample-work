import React, { Component } from 'react';
import {StyleSheet, Text, View,FlatList,SectionList,TextInput, TouchableOpacity, AsyncStorage, Keyboard, Image} from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';



export default class Settings extends Component {

    log_out() {
        Actions.signup()
    }
    render() {

        return(
            <View style={{flex: 1}}>
                <View style={{
                    flex: 0.8,
                    backgroundColor: 'powderblue',
                    alignItems:'center',
                }}>
                    <Image
                        source={require('../../assets/images/profile.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.buttonText}>Hafiz </Text>
                </View>
                <View style={{flex: 2, backgroundColor: 'white'}}>
                    <FlatList style={{marginLeft:10,marginRight: 10,}}
                        data={[
                            {key: 'Email',title:'hafiz@atcen.com'},
                            {key: 'Gender',title:'Male'},
                            {key: 'Birthday',title:'01/12/1994'},
                            {key: 'Company Name',title:'ATCEN'},
                            {key: 'Job Title',title:'Head of Human Resource'},
                            {key: 'Password',title:''},

                            ]}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View style={styles.separator}>
                                <Text style={styles.text1}>{item.key} </Text>
                                <Text style={styles.text2}>{item.title}</Text>
                            </View>
                        )}
                    />
                    {/*<Text style={{*/}

                        {/*fontSize: 20,*/}
                        {/*textAlign: 'left',*/}
                        {/*marginLeft: 15,*/}
                        {/*color: '#3498DB',*/}
                        {/*marginTop:-20,*/}


                    {/*}}>Logout</Text>*/}
                </View>
                <View style={{
                    flex: 0.9,
                    backgroundColor: 'white',

                }}>
                    <TouchableOpacity onPress={this.log_out}>
                    <Text style={{
                        fontSize: 20,
                        color: '#3498DB',
                        textAlign: 'left',
                        marginLeft:25,
                        marginTop:1,
                    }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        width:60,
        height:60,
        marginBottom:10,
        marginTop:10,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#3498DB',
        textAlign: 'center',
        marginLeft:15,
        marginTop:3,


    },
    text1: {
        flex: 1,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 15,
        color: '#3498DB',
        marginBottom: 13,
        marginTop:10,

    },
    text2: {
        flex: 1,
        fontSize: 20,
        textAlign: 'right',
        marginRight: 15,
        color: '#3498DB',
        marginTop:10,
    },
    separator: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#3498DB',
        flexDirection:'row',

    },

});