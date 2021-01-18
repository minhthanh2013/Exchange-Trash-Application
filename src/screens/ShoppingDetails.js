import { NavigationHelpersContext } from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import {firebaseApp} from '../components/Firebase'
import "firebase/database";

export default ShoppingDetails = ({ route, navigation }) => {

  const { item } = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={[styles.headerWrapper, {marginBottom: 15}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={18} color={colors.black} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={18}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

      <ScrollView>
        {/* Image item */}
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <Image source={item.image} style={styles.itemImage} />
        </View>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>Số điểm: {item.price} </Text>
          <MaterialCommunityIcons
              name="leaf"
              size={16}
              color={colors.green}
              style={{marginTop: 6}}
          />
        </View>

        {/* Description */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Mô tả</Text>
          <Text>{item.description}</Text>
        </View>
      </ScrollView>

      {/* Order */}
      <TouchableOpacity onPress={() =>{ 

        var len
        var user = firebaseApp.auth().currentUser;
        if(user){
          firebaseApp.database().ref('users/' +  user.uid ).child('carts').on("value",(abc)=>{
            len=abc.numChildren()
          })
        }


          var temp_1=len+1
            firebaseApp.database().ref('users/' + user.uid+'/carts').child('cart'+temp_1).set({
              title: item.title,
              image: item.image,
              id: item.id,
              price: item.price,
              amount: 1
            })
            alert('Đã thêm vào giỏ')
            navigation.navigate('Shopping') 
          }
    }>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Thêm vào giỏ</Text>
          <Feather name="shopping-bag" size={18} color={colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 7,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.green,
    padding: 7,
    borderRadius: 10,
    borderColor: colors.green,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  priceWrapper: {
    marginTop: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  priceText: {
    color: colors.green,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    width: 300,
    height: 290,
  },
  ingredientsWrapper: {
    marginTop: 10,
    marginLeft: 20,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: colors.green,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    marginRight: 10,
    color: colors.white,
  },
});
