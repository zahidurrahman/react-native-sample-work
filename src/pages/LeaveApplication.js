import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,FlatList,Button, TouchableOpacity,ActivityIndicator, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';



export default class LeaveApplication extends Component {

    constructor()
    {
        super();

        //insert data to database state
        this.state = {

            Product_Name: '',

            Product_Number: '',

            Product_Details: '',

            ActivityIndicator_Loading: false,

        };
        //get data state
        this.state = {
            loading: true,
            dataSource:[]
        };
    }

    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://nifty-henrys.000webhostapp.com/Insert_Product.php',
                {
                    method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(
                        {
                            product_name : this.state.Product_Name,

                            product_number : this.state.Product_Number,

                            product_details : this.state.Product_Details

                        })

                }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    //display data from database  statrt
    componentDidMount(){
        fetch("https://nifty-henrys.000webhostapp.com/Show_Product.php")
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
    }// onPress={this.editdetails_open}
    renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>Product ID : {data.item.product_id}</Text>
            <Text style={styles.lightText}>Product Name : {data.item.product_name}</Text>
            <Text style={styles.lightText}>Product Quantity : {data.item.product_number}</Text>
            <Text style={styles.lightText}>Product Details : {data.item.product_details}</Text>

            <Text
                style = {{
                    color: '#fff',
                    backgroundColor:'blue',
                    textAlign: 'left',
                    fontSize: 18,
                    marginBottom:10,
                    width:100,
                    marginLeft:10,
                }}
                onPress={() => this._onItemSelect(data.item.product_id)}
            >
                Edit</Text>
            <Text
                style = {{
                    color: '#fff',
                    backgroundColor:'red',
                    textAlign: 'left',
                    fontSize: 18,
                    marginBottom:10,
                    width:100,
                    marginLeft:10,
                }}
                onPress={() => this._onItemSelect_del(data.item.product_id)}
            >
                Delete</Text>

        </TouchableOpacity>


    //display data from database  finish
    //edit function
    _onItemSelect(item) {
        //  handle action to render the new page!

        Actions.editdetails({text: item});
    }
    //delete function
    _onItemSelect_del(item) {
        //  handle action to render the new page!

        Actions.deletedetails({text: item});
    }
    render() {
        //display data start
        if(this.state.loading){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )}
        //display data finish

        return(

        <View style={{flex: 1}}>
                <View style={{flex: 5, backgroundColor: 'powderblue'}}>
                    <View style = { styles.MainContainer }>

                        <TextInput
                            placeholder = "Enter Product Name"
                            style = { styles.TextInputStyleClass }
                            underlineColorAndroid = "transparent"
                            onChangeText = {(TextInputText) => this.setState({ Product_Name: TextInputText })} />

                        <TextInput
                            placeholder = "Enter Product Number"
                            style = { styles.TextInputStyleClass }
                            underlineColorAndroid = "transparent"
                            onChangeText = {(TextInputText) => this.setState({ Product_Number: TextInputText })} />

                        <TextInput
                            placeholder = "Enter Product Details"
                            style = { styles.TextInputStyleClass }
                            underlineColorAndroid = "transparent"
                            onChangeText = {(TextInputText) => this.setState({ Product_Details: TextInputText })} />

                        <TouchableOpacity
                            activeOpacity = { 0.5 }
                            style = { styles.TouchableOpacityStyle }
                            onPress = { this.Insert_Data_Into_MySQL }>

                            <Text style = { styles.TextStyle }>ADD</Text>

                        </TouchableOpacity>

                        {

                            this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null

                        }

                    </View>
                </View>

                <View style={{flex: 4, backgroundColor: 'skyblue'}}>
                    <View style = { styles.MainContainer2 }>
                    {/*display data start*/}
                        <FlatList
                            data= {this.state.dataSource}
                            ItemSeparatorComponent = {this.FlatListItemSeparator}
                            renderItem= {item=> this.renderItem(item)}
                            keyExtractor= {item=>item.product_id.toString()}
                        />
                    </View>
                    {/*//display data start*/}
                </View>

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