import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,ScrollView, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions,Router,Scene} from 'react-native-router-flux';



export default class Home extends Component {
    leaveapplication() {
        Actions.leave()
    }

    calender_open() {
        Actions.calender()
    }
    walk() {
        Actions.walkthrough()
    }

    render() {
        return(

            <View style={{flex: 1}}>
              <ScrollView>
                  <View style={{flex: 1, backgroundColor: 'powderblue',alignItems: 'center',}}>
                      <View style={{ width: 380,
                          backgroundColor: '#3498DB',
                          borderRadius: 10,
                          marginVertical: 10,
                          paddingVertical: 12,
                          marginTop:10,
                         }}>
                          {/*<Text>-----------------------TimeLog ----------------------------------------</Text>*/}
                          <View style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 40,
                              width: 350,
                              margin: 20,
                              marginBottom: 30,

                          }}

                          >
                              <TouchableOpacity style={{
                                  width: 350,
                                  backgroundColor: '#3498DB',
                                  borderRadius: 10,
                                  marginVertical: 10,
                                  paddingVertical: 12,
                                  marginTop:3,
                                  flex:1,
                                  flexDirection: 'row',


                              }} >


                                  <Text style={styles.buttonText}>Hi, Hafiz </Text>

                                  <View style={{backgroundColor:'white',width:30,
                                      height:30,borderRadius: 15, marginLeft:188,}}>
                                      <Icon
                                          style={{
                                              textAlign: 'right',color:'skyblue',
                                              marginLeft:8,
                                              marginTop:8,
                                              width:15,
                                              height:15,

                                          }} size={15} name="bell"
                                      />
                                  </View>

                              </TouchableOpacity>
                          </View>
                          {/*<Text>-----------------------TimeLog ----------------------------------------</Text>*/}
                              <Text style={{
                                  fontSize: 15,
                                  fontWeight: '500',
                                  color: '#ffffff',
                                  textAlign: 'left',
                                  marginLeft:33,
                                  marginTop:3,

                              }}>Point : 100   Token : 50 </Text>
                      </View>
                  </View>
                <View style={{flex: 2, backgroundColor: 'steelblue'}} >
                    <Text>Text messaging, or texting,
                        is the act of composing
                        and sending electronic
                        messages, typically
                        consisting of alphabetic
                        and numeric characters,
                        between two or more
                        users of mobile
                        devices, desktops/laptops,
                        or other type of
                        compatible computer.
                        Text messages may
                        be sent over a
                        cellular network,
                        or may also be
                        sent via an
                        Internet connection.
                        Text messaging, or texting,
                        is the act of composing
                        and sending electronic
                        messages, typically
                        consisting of alphabetic
                        and numeric characters,
                        between two or more
                        users of mobile
                        devices, desktops/laptops,
                        or other type of
                        compatible computer.
                        Text messages may
                        be sent over a
                        cellular network,
                        or may also be
                        sent via an
                        Internet connection.
                        Text messaging, or texting,
                        is the act of composing
                        and sending electronic
                        messages, typically
                        consisting of alphabetic
                        and numeric characters,
                        between two or more
                        users of mobile
                        devices, desktops/laptops,
                        or other type of
                        compatible computer.
                        Text messages may
                        be sent over a
                        cellular network,
                        or may also be
                        sent via an
                        Internet connection.
                        Text messaging, or texting,
                        is the act of composing
                        and sending electronic
                        messages, typically
                        consisting of alphabetic
                        and numeric characters,
                        between two or more
                        users of mobile
                        devices, desktops/laptops,
                        or other type of
                        compatible computer.
                        Text messages may
                        be sent over a
                        cellular network,
                        or may also be
                        sent via an
                        Internet connection.eeeee</Text>
                </View>
                <View style={{flex: 3, backgroundColor: 'skyblue',
                    alignItems: 'center',
                }}>
                    {/*<Text>-----------------------TimeLog ----------------------------------------</Text>*/}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 350,
                        margin: 20,
                        marginBottom: 30,

                    }}

                    >
                        <TouchableOpacity style={{
                            width: 350,
                            backgroundColor: '#3498DB',
                            borderRadius: 10,
                            marginVertical: 10,
                            paddingVertical: 12,
                            marginTop:30,
                            flex:1,
                            flexDirection: 'row',


                        }} onPress={this.leaveapplication}>

                            <View style={{backgroundColor:'white',width:30,
                                height:30,borderRadius: 15, marginLeft:15,}}>
                                <Icon
                                    style={{
                                        textAlign: 'center',color:'skyblue',
                                        marginLeft:8,
                                        marginTop:8,
                                        width:15,
                                        height:15,

                                    }} size={15} name="bell"
                                />
                            </View>
                            <Text style={styles.buttonText}>TimeLog </Text>
                        </TouchableOpacity>
                    </View>
                    {/*<Text>-----------------------TimeLog ----------------------------------------</Text>*/}

                    {/*<Text>-----------------------Leave Application start----------------------------------------</Text>*/}
                    <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 350,
                            margin: 20,
                            marginBottom: 30,

                        }}

                        >
                                <TouchableOpacity style={{
                                    width: 350,
                                    backgroundColor: '#3498DB',
                                    borderRadius: 10,
                                    marginVertical: 10,
                                    paddingVertical: 12,
                                    marginTop:30,
                                    flex:1,
                                    flexDirection: 'row',


                                }} onPress={this.leaveapplication}>

                                    <View style={{backgroundColor:'white',width:30,
                                        height:30,borderRadius: 15, marginLeft:15,}}>
                                        <Icon
                                            style={{
                                                textAlign: 'center',color:'skyblue',
                                                marginLeft:8,
                                                marginTop:8,
                                                width:15,
                                                height:15,

                                            }} size={15} name="bell"
                                        />
                                    </View>
                                    <Text style={styles.buttonText}>Leave Application</Text>
                                </TouchableOpacity>
                     </View>
                    {/*<Text>-----------------------Leave Application finish----------------------------------------</Text>*/}
                    {/*<Text>-----------------------Calender----------------------------------------</Text>*/}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 350,
                        margin: 10,
                        marginBottom: 30,
                    }}

                    >
                        <TouchableOpacity style={{
                            width: 350,
                            backgroundColor: '#3498DB',
                            borderRadius: 10,
                            marginVertical: 10,
                            paddingVertical: 12,
                            marginTop:30,
                            flex:1,
                            flexDirection: 'row',


                        }} onPress={this.calender_open}>

                            <View style={{backgroundColor:'white',width:30,
                                height:30,borderRadius: 15, marginLeft:15,}}>
                                <Icon
                                    style={{
                                        textAlign: 'center',color:'skyblue',
                                        marginLeft:8,
                                        marginTop:8,
                                        width:15,
                                        height:15,

                                    }} size={15} name="bell"
                                />
                            </View>
                            <Text style={styles.buttonText}>Calender</Text>
                        </TouchableOpacity>
                    </View>
                    {/*<Text>-----------------------Calender----------------------------------------</Text>*/}
                    {/*<Text>-----------------------Store Redemption----------------------------------------</Text>*/}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 350,
                        margin: 10,
                        marginBottom: 30,
                    }}

                    >
                        <TouchableOpacity style={{
                            width: 350,
                            backgroundColor: '#3498DB',
                            borderRadius: 10,
                            marginVertical: 10,
                            paddingVertical: 12,
                            marginTop:30,
                            flex:1,
                            flexDirection: 'row',


                        }} onPress={this.leaveapplication}>

                            <View style={{backgroundColor:'white',width:30,
                                height:30,borderRadius: 15, marginLeft:15,}}>
                                <Icon
                                    style={{
                                        textAlign: 'center',color:'skyblue',
                                        marginLeft:8,
                                        marginTop:8,
                                        width:15,
                                        height:15,

                                    }} size={15} name="bell"
                                />
                            </View>
                            <Text style={styles.buttonText}>Store Redemption</Text>
                        </TouchableOpacity>
                    </View>
                    {/*<Text>-----------------------Store Redemption----------------------------------------</Text>*/}
                    {/*<Text>-----------------------Quest----------------------------------------</Text>*/}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 350,
                        margin: 10,
                        marginBottom: 30,
                    }}

                    >
                        <TouchableOpacity style={{
                            width: 350,
                            backgroundColor: '#3498DB',
                            borderRadius: 10,
                            marginVertical: 10,
                            paddingVertical: 12,
                            marginTop:30,
                            flex:1,
                            flexDirection: 'row',


                        }} onPress={this.walk}>

                            <View style={{backgroundColor:'white',width:30,
                                height:30,borderRadius: 15, marginLeft:15,}}>
                                <Icon
                                    style={{
                                        textAlign: 'center',color:'skyblue',
                                        marginLeft:8,
                                        marginTop:8,
                                        width:15,
                                        height:15,

                                    }} size={15} name="bell"
                                />
                            </View>
                            <Text style={styles.buttonText}>Quest</Text>
                        </TouchableOpacity>
                    </View>
                    {/*<Text>-----------------------Quest---------------------------------------</Text>*/}

                </View>
              </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,

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
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 12,
        marginTop:30,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        marginLeft:15,
        marginTop:3,


    },
    logo:{
        width:350,
        marginBottom:40,
    },

});