import { NavigationHelpersContext } from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import { useState } from 'react'
import {firebaseApp} from '../components/Firebase'
import "firebase/database";




export default Details = ({ route, navigation }) => {
  const [amount, setAmount] = useState({ value: 0})
  const { item } = route.params;

var user = firebaseApp.auth().currentUser;




  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
        ]}>
         
        <Image source={item.image} style={styles.ingredientImage} />
        <View 
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
            marginTop: 15,
          }}>
          <Text style={[{fontSize: 15}]}>{item.name}</Text>
        </View>

        <TextInput style={styles.inputNumber} 
        placeholder=" Kg"
        // returnKeyType="done"
        // value={item.amount.toString()}
        onChangeText={(text)=>{
          //amount = text,
          item.amount = text
          setAmount({ value: text })

        }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>

     
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>


      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={[styles.ingredientsTitle, {fontSize: 20}]} >
        Nhập số lượng
        </Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            //value={amount.value}
            renderItem={renderIngredientsItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
          />
          
        </View>
      </View>

      {/* Place an order */}
      <TouchableOpacity 
      >
        
        <View style={styles.orderWrapper}>
          <TouchableOpacity 
          onPress = {() => { 


            // Generate current date with time
            if (user) {
              // Xu ly so luong
              var am_1=parseInt(item.ingredients[0].amount)
              var am_2=parseInt(item.ingredients[1].amount)
              if(am_1 != 0 && am_2 !=0){
                var postData={
                    id: item.ingredients[0].id,
                    name: item.ingredients[0].name, 
                    amount: item.ingredients[0].amount,
                    image:item.ingredients[0].image
                  }
                  var postData_2={
                    id: item.ingredients[1].id,
                    name: item.ingredients[1].name, 
                    amount: item.ingredients[1].amount,
                    image:item.ingredients[1].image
                    }
                    var len
                      firebaseApp.database().ref('users/' +  user.uid ).child('data').on("value",(abc)=>{
                        len=abc.numChildren()
                      })
                      var temp_1=len
                     firebaseApp.database().ref('users/' +  user.uid ).child('data').child('dulieu'+temp_1).set(
                       postData);
                      var temp_2=temp_1+1
                    
                     firebaseApp.database().ref('users/' +  user.uid ).child('data').child('dulieu'+temp_2).set(
                       postData_2);
                      //  var temp_point_1=item.ingredients[0].amount*10000
                      //  var temp_point_2=item.ingredients[1].amount*10000
                      //  var sum_temp_point=temp_point_1+ temp_point_2
                      //  item.ingredients[1].amount=0
                      //  item.ingredients[0].amount=0
                      //  //1 ky = 10000 diem
                      // point=point+sum_temp_point
                      //  firebaseApp.database().ref('users/' +  user.uid ).child('user_point').set(point)


              }
              else if(am_1 ==0 && am_2!=0){
                var postData={
                    id: item.ingredients[1].id,
                    name: item.ingredients[1].name, 
                    amount: item.ingredients[1].amount,
                    image:item.ingredients[1].image
                }
                firebaseApp.database().ref('users/' +  user.uid ).child('data').child('dulieu'+temp_1).set(postData)
                item.ingredients[1].amount=0
              }
              else if(am_1 !=0 && am_2==0){
                var postData={
                  id: item.ingredients[0].id,
                  name: item.ingredients[0].name, 
                  amount: item.ingredients[0].amount,
                  image:item.ingredients[0].image
                }
                firebaseApp.database().ref('users/' +  user.uid ).child('data').child('dulieu'+temp_1).set(postData)
                item.ingredients[0].amount=0
              }  

              navigation.navigate('Point')

          } 
          }}>
          
          <Text style={styles.orderText}>Cập nhật</Text>  
          </TouchableOpacity>
          <Feather name="chevron-right" size={28} color={colors.white} />
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
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.green,
    padding: 12,
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
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
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
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
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
    elevation: 10,
    marginBottom: 20,
    width: 370,
    height: 100,
    marginLeft: 20,
    flexDirection: 'row',
  },
  ingredientImage: {
    resizeMode: 'contain',
    marginTop: 10,
  },
  orderWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: colors.green,
    borderRadius: 50,
    paddingVertical: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginRight: 10,
    color: 'white',
  },
  inputNumber:{
    borderWidth: 2,
    borderColor: colors.green,
    width: 100,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    paddingLeft: 35,
    fontSize: 20,
  }
  
});
