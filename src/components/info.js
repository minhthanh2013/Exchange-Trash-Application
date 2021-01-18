import React, { Component } from 'react'
import Button from 'react-native-button'

import{Text, View, Image} from 'react-native'

const backgroudColor = '#007256'

export default class Info extends Component{
    static navigationOptions = ({navigation}) =>{
        const { params = {}} = navigation.state;
        let tabBarLabel = 'Info';
        let tabBarIcon = () => (
            <Image
                source={require('../assets/logo.png')}
                style = {{width: 26, height: 26, tintColor: backgroudColor}}
            />
        );
        return { tabBarIcon,tabBarIcon };
    }
    render(){
        return(
            <View
            style={{backgroundColor:backgroudColor}}>
            </View>
        );
    }
}