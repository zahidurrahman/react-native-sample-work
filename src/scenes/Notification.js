import React, { Component } from 'react';
import { StyleSheet,  AppState,Text,Button, View, FlatList,ActivityIndicator,TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';

import PushNotification from 'react-native-push-notification';
import PushController from './PushController.js'; //The push controller created earlier

var datew = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds
var dd= datew + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
export default class Notification extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.sendNotification = this.sendNotification.bind(this);

        //fetch data
        this.state = {
            loading: true,
            dataSource:[]
        };
        //fetch data
        this.state={
            x:5,
        };
    };

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    };

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    };

    // This will notify the user in 3 seconds after sending the app to the
    // background (like after pressing the home button or switching apps)
    handleAppStateChange(appState) {
        if (appState === 'background') {
            // Schedule a notification
            PushNotification.localNotificationSchedule({
                message: 'Scheduled delay notification message', // (required)
                date: new Date(Date.now() + (8 * 1000)) // in 3 secs
            });
        }
    };



    sendNotification() {
        PushNotification.localNotification({
            message: 'Aziz Azri has submitted a leave application at '+dd
        });
    };

    ///api fetch data in react native
    //  http://192.168.0.108:8000/api/books
    // https://jsonplaceholder.typicode.com/users?id=1

    componentDidMount(){
        fetch("http://vegemalaysia.com/test.php")
            .then(response => response.json())
            .then((responseJson)=> {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width:"100%",
                backgroundColor:"rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>{data.item.id}</Text>
            <Text style={styles.lightText}>{data.item.title}</Text>
            <Text style={styles.lightText}>{data.item.description}</Text>
            {/*<Text style={styles.lightText}>{data.item.company.name}</Text>*/}
        </TouchableOpacity>


    render() {


        if(this.state.loading){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )}

        //if condition checking
        // if(this.state.dataSource!=null){
        //     return(
        //         <View style={{marginTop:25,marginBottom:25,}}>
        //
        //             <Text>
        //                 xxx
        //             </Text>
        //
        //             <Button title='Push Notification'
        //                     onPress={this.sendNotification} />
        //             <PushController />
        //         </View>
        //         )
        //
        // }


        return(

            <View style={styles.container}>
                <FlatList
                    data= {this.state.dataSource}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem= {item=> this.renderItem(item)}
                    keyExtractor= {item=>item.id.toString()}
                />

                <View style={{marginTop:25,marginBottom:25,}}>

                    <Text>
                        Press the button to see push Notification
                    </Text>

                    <Button title='Push Notification'
                            onPress={this.sendNotification} />
                    <PushController />
                </View>
            </View>

        )

        // ///api fetch data in react native finish
        // return (
        //
        //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //         <Text>
        //             Press the button to see push Notification
        //         </Text>
        //         <Button title='Push Notification'
        //                 onPress={this.sendNotification} />
        //         <PushController />
        //     </View>
        // );

    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});