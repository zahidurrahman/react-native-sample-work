import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,FlatList, TouchableOpacity,ActivityIndicator, AsyncStorage, Keyboard } from 'react-native';

import {Actions,Router,Scene} from 'react-native-router-flux';



export default class EditDetails extends Component {

    constructor()
    {
        super();

       // insert data to database state
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
            fetch('https://nifty-henrys.000webhostapp.com/Update_Product.php?product_id='+this.props.text,
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
       // const { params } = this.props.text;
        fetch("https://nifty-henrys.000webhostapp.com/Show_Indivisual.php?product_id="+this.props.text)
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

        <View style = { styles.MainContainer }>

            <TextInput

                placeholder = {data.item.product_name}
                style = { styles.TextInputStyleClass }
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ Product_Name: TextInputText })}

            />

            <TextInput
                placeholder = {data.item.product_number}
                style = { styles.TextInputStyleClass }
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ Product_Number: TextInputText })} />

            <TextInput
                placeholder = {data.item.product_details}
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

    //display data from database  finish

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