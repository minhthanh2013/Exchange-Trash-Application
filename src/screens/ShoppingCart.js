import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import cartData from '../assets/data/cartData';
//import cartData from './getdata'
import colors from '../assets/colors/colors';
import {firebaseApp} from '../components/Firebase'
import "firebase/database";
Feather.loadFont();
MaterialCommunityIcons.loadFont();
var { width } = Dimensions.get("window")
//const cartData=[]

// if(user){
  
// }

  
export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
      user_point: 0
    };
  }
  
  componentDidMount() {

    var user = firebaseApp.auth().currentUser;

          firebaseApp.database().ref('users/' +  user.uid ).child('carts').on("value",(abc)=>{
            var temp_db=[]
            abc.forEach((doc)=>{
              temp_db.push(doc.val())
            })
            this.setState({
              dataCart: temp_db
            })
          })
          firebaseApp.database().ref('users/' +  user.uid ).child('user_point').on("value",(abc)=>{
            
            
            this.setState({
              user_point: abc.val()
            })
          })

  }

  onChangeQuat(i, type){
    const cart = this.state.dataCart
    let cant = cart[i].amount;
    if (type) {
      cant = cant + 1
      cart[i].amount = cant
      this.setState({dataCart: cart})
    }
    else if (type == false && cant >= 2) {
      cant = cant - 1
      cart[i].amount = cant
      
      this.setState({dataCart: cart})
    }
    else if (type == false && cant == 1) {
      cart.splice(i, 1)
      this.setState({dataCart: cart})
    }
  }
  getTotalPrice(){
    const cart = this.state.dataCart
    var count = 0;
    var i;
    for (i in cart) {
      if (cart.hasOwnProperty(i)) {
          count++;
      }
    }
    var tong=0
    for(var j=0;j<count;j++){
      var temp=cart[j].amount*cart[j].price
      tong+=temp
    }
    return tong
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => 
            {this.props.navigation.goBack()}}>
              <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={17} color={colors.textDark} />
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}> 
              <Feather name="menu" size={24} color={colors.textDark} style={{marginRight: 20}}/>
              <Feather name="shopping-bag" size={24} color={colors.textDark} />
            </View>
          </View>
        </SafeAreaView>
  
        {/* Titles */}
        <View style={[styles.titlesWrapper, {flexDirection:'row'}]}>
          <Text style={styles.titlesTitle}>Giỏ quà của bạn</Text>
        </View>
          
        {/* List cart */}
        <View style={{flex: 1, flexDirection:'column'}}>
        <View style={[{flex: 9, alignItems: 'center', justifyContent: 'center'}]}>
          <ScrollView >
            {this.state.dataCart.map((item, i) => {
              return (
                <View key={item.id} style={[styles.itemWrapper]}>
                  {/* Item image */}
                  <Image source={item.image} style={{width: (width/5)*2, height: 150}} />
                  <View style={styles.itemDetail}>
                     {/* Item title */}
                    <Text style={styles.itemTitle}>{item.title}</Text>
                     {/* Item price */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.itemPrice}>Giá: {item.price}</Text>
                      <MaterialCommunityIcons
                            name="leaf"
                            size={16}
                            color={colors.green}
                            style={{marginTop: 2}}
                      />
                    </View>
                    {/* Button + - */}
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => this.onChangeQuat(i, false)}>
                        <Feather name="minus-circle" size={25} color={colors.textDark}/>
                      </TouchableOpacity >
                      <Text style={{fontWeight: 'bold', paddingHorizontal: 8, fontSize: 17}}>{item.amount}</Text>
                      <TouchableOpacity onPress={() => this.onChangeQuat(i, true)}>
                        <Feather name="plus-circle" size={25} color={colors.textDark}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
          {/* Total */}
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <View>
            <Text style={styles.titlesTitle}>Tổng cộng:{this.getTotalPrice()}</Text>
          </View>
          <TouchableOpacity >

          </TouchableOpacity>
        </View>
        {/* Button Check out */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>

          <TouchableOpacity 
            style={{
              backgroundColor: colors.green, 
              width: width-40, 
              padding: 5,
              borderRadius: 5,
              alignItems: 'center' 
            }}
            onPress={()=>{
              var cur_point=this.state.user_point
              var user = firebaseApp.auth().currentUser;
              let getLen=this.state.dataCart.length
              
              
              if(cur_point>this.getTotalPrice()){
                alert("Thanh toán thành công")
                for(var i=1;i<getLen+1;i++){
                  let cartref=firebaseApp.database().ref('users/' +  user.uid ).child('carts').child('cart'+i)
                  cartref.remove()
                }
                
                var temp_3=cur_point-this.getTotalPrice()
                firebaseApp.database().ref('users/' +  user.uid ).update({
                  user_point:temp_3
                })
                this.props.navigation.goBack()
              }
              else{
                var temp_2=this.getTotalPrice()-cur_point
                alert("Thanh toán thất bại, bạn cần thêm "+temp_2+" để thực hiện thanh toán!")
              }
            } }
            >                
            <Text style={styles.textCheckOut}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  titlesWrapper: {
    marginTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  textCheckOut: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    borderBottomWidth:2,
    borderColor: '#cccccc',
    paddingVertical: 10, 
  },
  itemDetail: {
    width: (width/5)*3,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemPrice: {
    fontSize: 15,
    color: colors.green,
    fontWeight: 'bold',
    marginBottom: 15,
  }
});