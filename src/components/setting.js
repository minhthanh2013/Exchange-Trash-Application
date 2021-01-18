import React, { Component } from 'react'
import Button from 'react-native-button'

import{Text, View, Image} from 'react-native'

const backgroudColor = '#e97600';

export default class Setting extends Component{
    static navigationOptions = ({navigation}) =>{
        const { params = {}} = navigation.state;
        let tabBarLabel = 'Setting';
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
                <Text>asdasdas</Text>
            </View>
        );
    }
}