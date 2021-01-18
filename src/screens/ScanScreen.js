import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {firebaseApp} from '../components/Firebase'
import "firebase/database";
export default class ScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      confCode: '',
      point: 0
    };
  }
  componentDidMount() {

    var user = firebaseApp.auth().currentUser;

    firebaseApp.database().ref('users/' +  user.uid ).child('confCode').on("value",(abc)=>{
            
      this.setState({
        confCode: abc.val()
      })
    })
    firebaseApp.database().ref('users/' +  user.uid ).child('data').on("value",(abc)=>{
      var temp_db=[]
      abc.forEach((doc)=>{
        temp_db.push(doc.val())
      })
      this.setState({
        data: temp_db
      })
    })
    firebaseApp.database().ref('users/' +  user.uid ).child('user_point').on("value",(abc)=>{

      this.setState({
        point: abc.val()
      })
    })      
          

  }
  getTotalPoint(){
    var data_temp=this.state.data
    var tong=0
    for(var i =0;i<data_temp.length;i++){
      tong+=data_temp[i].amount*10000
    }
    return tong
  }

  deleteCollection(){
    var user = firebaseApp.auth().currentUser;
    let colRef=firebaseApp.database().ref('users/' +  user.uid ).child('data')
    colRef.remove()
  }
  onSuccess(e) {
    if(this.state.confCode== e.data){
    var getPoint=this.state.point
    var pointfromCollection=this.getTotalPoint()
    var temp=getPoint+pointfromCollection
    var user = firebaseApp.auth().currentUser;
    firebaseApp.database().ref('users/' +  user.uid ).child('user_point').set(temp)
    this.deleteCollection()
      alert("Quét thành công! Bạn đã cộng "+pointfromCollection+" điểm vào tài khoản!")
      this.props.navigation.navigate('Home')
    }
    else{
      alert("Quét thất bại!!")
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
        //   <Text style={styles.centerText}>
        //     Go to{' '}
        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //     your computer and scan the QR code.
        //   </Text>
        <Text style={styles.centerText}>
            Quét mã QR từ cửa hàng thu gom Greenie để tích điểm.
        </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}
          >
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
