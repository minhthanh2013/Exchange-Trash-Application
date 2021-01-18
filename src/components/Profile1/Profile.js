import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  TouchableOpacity,
  Linking,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ProfileAva from '../../components/ProfileAva_1'
import Separator from './Separator'
import {firebaseApp} from '../../components/Firebase'
import "firebase/database";
import mainColor from './constants'
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  //Tels 
  
  // ------------------------
})

const styles1 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  smsIcon: {
    color: 'darkgray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: mainColor,
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})
const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: 'gray',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})


//Get data
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userpoint:'',
      email:'',
      user_uri:'',
      total_amount:0,
      city: 'Ho  Chi Minh',
      country: 'Viet Nam'
    };
  }
  
  componentDidMount() {

    var user = firebaseApp.auth().currentUser;

    firebaseApp.database().ref('users/' +  user.uid ).on("value",(abc)=>{
            var name=abc.val().user_name.charAt(0).toUpperCase() + abc.val().user_name.slice(1)
            var point=abc.val().user_point
            var avatar_uri=abc.val().avatar_uri
            var email_add=abc.val().email
            this.setState({
              username: name,
              userpoint:point,
              user_uri: avatar_uri,
              email: email_add
            })
            
          })
          firebaseApp.database().ref('users/' +  user.uid ).child('data').on("value",(abc)=>{
            var temp_db=[]
            abc.forEach((doc)=>{
              temp_db.push(doc.val())
            })
            var tong=0
            for(var i=0;i<temp_db.length;i++){
              tong+=parseInt(temp_db[i].amount)
            }
            this.setState({
              total_amount: tong
            })
          })

  }


  renderHeader = () => {
    
    return(<View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{uri: 'https://i.imgur.com/rXVcgTZ.jpg'}}

        >
          <View style={styles.headerColumn}>
            <ProfileAva/>
            <Text style={styles.userNameText}>{this.state.username}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  Ho Chi Minh, Viet Nam
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>)
  }







  onPressEmail=(email)=> {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err)
    )
  }



  renderTel = () =>{
    return (
      <TouchableOpacity
      >
        <View style={[styles1.container, styles.telContainer]}>
          <View style={styles1.iconRow}>
            
              <Icon
                name="keyboard-arrow-down"
                underlayColor="transparent"
                iconStyle={styles1.telIcon}
                
              />
            
          </View>
          <View style={styles1.telRow}>
            <View style={styles1.telNumberColumn}>
              <Text style={styles1.telNumberText}>Số điểm hiện tại: </Text>
            </View>
            <View style={styles1.telNameColumn}>
                <Text style={styles1.telNameText}>{this.state.userpoint}</Text>
            </View>
            <View style={styles1.telNumberColumn}>
              <Text style={styles1.telNumberText}>Số rác đã tích lũy</Text>
            </View>
            <View style={styles1.telNameColumn}>
                <Text style={styles1.telNameText}> {this.state.total_amount} Kg </Text>
            </View>

          </View>
          {/* <View style={styles1.telRow}>


            
          </View> */}
          <View style={styles1.iconRow}>
            <Icon
              name="add-circle-outline"
              underlayColor="transparent"
              iconStyle={styles1.telIcon}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderEmail = () => {


        return (
              <TouchableOpacity onPress={() => this.onPressEmail(this.state.email)}>
        <View style={[styles2.container, styles.emailContainer]}>
          <View style={styles2.iconRow}>

              <Icon
                name="email"
                underlayColor="transparent"
                iconStyle={styles2.emailIcon}
                onPress={() => this.onPressEmail()}
              />
          </View>
          <View style={styles2.emailRow}>
            <View style={styles2.emailColumn}>
              <Text style={styles2.emailText}>{this.state.email}</Text>
            </View>
            <View style={styles2.emailNameColumn}>
        
                <Text style={styles2.emailNameText}>{this.state.username}</Text>

            </View>
          </View>
        </View>
      </TouchableOpacity>
        )
    }



    render() {
      return (
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Card style={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderTel()}
            {Separator()}
            {this.renderEmail()} 

            
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default Contact
