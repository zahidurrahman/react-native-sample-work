import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import { Agenda } from 'react-native-calendars';
import {Actions,Router,Scene} from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';


export default class Calender extends Component {
    leaveapplication() {
        Actions.leave()
    }

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }



    render() {
        return (

            <Agenda
                style={{backgroundColor:'powderblue'}}
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={'2019-05-20'}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                // markingType={'period'}
                // markedDates={{
                //    '2017-05-08': {textColor: '#666'},
                //    '2017-05-09': {textColor: '#666'},
                //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                //    '2017-05-21': {startingDay: true, color: 'blue'},
                //    '2017-05-22': {endingDay: true, color: 'gray'},
                //    '2017-05-24': {startingDay: true, color: 'gray'},
                //    '2017-05-25': {color: 'gray'},
                //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                // monthFormat={'yyyy'}
                // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />


        );
    }

    loadItems(day) {
        const randomNumber = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);
        const labels = ['Urgent', 'Interview'];
        let x ="Meeting with ";
        let na = 'Rebeka';
        let y = '10:30 AM';
        let z = '11:00 AM';
        let per = 'Brendon Leo';
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name:y+' - '+z,
                            person:per,
                            mytime:x + na,
                            labels: [labels[0]],
                            height:120
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, {height: item.height}]}>
                <Text style={{color: '#3498DB',}}>{item.name}</Text>
                <Text style={{fontWeight: 'bold',fontSize: 16,color: '#3498DB',}}>{item.person}</Text>
                <Text style={{color: '#3498DB',}}>{item.mytime}</Text>
                <Text style={{width: 100,
                    backgroundColor: 'red',
                    borderRadius: 5,
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#ffffff',
                    textAlign: 'center',
                    marginTop: 10,
                   }}>
                    {item.labels}
                </Text>

            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>

                <Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 5,
        height: 45,
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    }
});