// import * as React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import colors from '../assets/colors/colors';
// //import collectionListData from '../assets/data/collectionListData';

// import {firebaseApp} from '../components/Firebase'
// import "firebase/database";




// // const collectionListData = [
// //   {
// //     id: '1',
// //     name: 'Chai nhựa',
// //     number: 2,
// //     image: require('../assets/images/plastic-bottle.jpg')
// //   },
// //   {
// //     id: '2',
// //     name: 'Túi nhựa',
// //     number: 1.5,
// //     image: require('../assets/images/plastic-bag.jpg'),
// //   },
// //   {
// //     id: '3',
// //     name: 'Thùng giấy',
// //     number: 3,
// //     image: require('../assets/images/box.jpg'),
// //   },
// //   {
// //     id: '4',
// //     name: 'Giấy',
// //     number: 2,
// //     image: require('../assets/images/paper-details.jpg'),
// //   },
// //   {
// //     id: '5',
// //     name: 'Lon',
// //     number: 2.2,
// //     image: require('../assets/images/can-details.jpg'),
// //   },
// //   {
// //     id: '6',
// //     name: 'Sắt/Thép',
// //     number: 4,
// //     image: require('../assets/images/iron.jpg'),
// //   },
// //   {
// //     id: '7',
// //     name: 'Chai',
// //     number: 1.6,
// //     image: require('../assets/images/bottle-details.jpg'),
// //   },
// //   {
// //     id: '8',
// //     name: 'Kính',
// //     number: 1,
// //     image: require('../assets/images/glass-details.jpg'),
// //   },
// //   {
// //     id: '9',
// //     name: 'Bin',
// //     number: 0.5,
// //     image: require('../assets/images/battery.jpg'),
// //     },
// //   {
// //     id: '10',
// //     name: 'Thiết bị điện tử',
// //     image: require('../assets/images/electronic-device.jpg'),
// //     number: 0,
// //   }, 
// // ];








// export default Amount = ({ navigation }) => {
//   var len=0
//   var user = firebaseApp.auth().currentUser;


//   firebaseApp.database().ref('users/' +  user.uid ).child('data').on("value",(abc)=>{
//     len=abc.numChildren()
//   })

//   const collectionListData=[]
//       var i;
//       for (i = 1; i < len+1; i++) {
//         firebaseApp.database().ref('users/' +  user.uid ).child('data').child('dulieu'+i).on("value",(abc)=>{
//           // console.log(abc.val())
//           collectionListData.push(abc.val())
//         })
//       }
//       // const collectionListData=[]
//       // collectionListData.push(temp_db)
//       console.log(collectionListData)
//   //console.log(temp_db)
//   const renderIngredientsItem = ({ item }) => {
//       // var temp
//       // var userId = firebaseApp.auth().currentUser.uid;
//       //   firebaseApp.database().ref('/users/' + userId+'/'+"data"+'/'+"-MQqZ4Wc8s-Q3W2dHYm_").on('value',(snapshot)=>
//       //   {
//       //       temp=snapshot.val()
//       //   })
//       // console.log(temp)
      
      
      
//     return (
//       <View
//         style={[
//           styles.ingredientItemWrapper,
//         ]}>
         
//         <View  
//           style={{
//             flexDirection: 'row',
//           }}>
//           <View 
//             style={{
//               marginLeft: 10,
//               flexDirection: 'row',
//               flex: 4,
//               paddingVertical: 10,
//             }}>
//             <Image source={item.image} style={styles.ingredientImage} />
//             <Text style={[{fontSize: 17, paddingVertical: 35, paddingLeft: 10}]}>{item.name}</Text>
//           </View>
//           <View   
//           style={{
//             flexDirection: 'column',
//             paddingTop: 10,
//           }}>
//             <Text style={styles.inputNumber}>{item.amount} Kg</Text>
//           </View>
//         </View>
//       </View>
//     );
        
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <SafeAreaView>
//         <View style={styles.headerWrapper}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <View style={styles.headerLeft}>
//               <Feather name="chevron-left" size={12} color={colors.textDark} />
//             </View>
//           </TouchableOpacity>
//           <View style={styles.headerRight}>
//             <MaterialCommunityIcons
//               name="star"
//               size={12}
//               color={colors.white}
//             />
//           </View>
//         </View>
//       </SafeAreaView>

     
//       {/* Titles */}
//       <View style={styles.titlesWrapper}>
//         <Text style={styles.title}>Bộ sưu tập hiện tại</Text>
//       </View>


//       {/* Ingredients */}
//       <View style={styles.ingredientsWrapper}>
//         <Text style={[styles.ingredientsTitle, {fontSize: 20}]}>Danh sách rác thải</Text>
//         <View style={styles.ingredientsListWrapper}>
//           <FlatList
//             data={collectionListData}
//             renderItem={renderIngredientsItem}
//             keyExtractor={(item) => item.id}
//             horizontal={false}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = new StyleSheet.create({
//   headerWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   headerLeft: {
//     borderColor: colors.textLight,
//     borderWidth: 2,
//     padding: 12,
//     borderRadius: 10,
//   },
//   headerRight: {
//     backgroundColor: colors.green,
//     padding: 12,
//     borderRadius: 10,
//     borderColor: colors.green,
//     borderWidth: 2,
//   },
//   titlesWrapper: {
//     paddingHorizontal: 20,
//     marginTop: 30,
//   },
//   title: {
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 32,
//     color: colors.green,
//     width: '100%',
//   },
//   priceWrapper: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
//   priceText: {
//     color: colors.price,
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 32,
//   },
//   infoWrapper: {
//     marginTop: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   infoLeftWrapper: {
//     paddingLeft: 20,
//   },
//   infoItemWrapper: {
//     marginBottom: 20,
//   },
//   infoItemTitle: {
//     fontFamily: 'Montserrat-Medium',
//     fontSize: 14,
//     color: colors.textLight,
//   },
//   infoItemText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 18,
//     color: colors.textDark,
//   },
//   itemImage: {
//     resizeMode: 'contain',
//     marginLeft: 50,
//   },
//   ingredientsWrapper: {
//     marginTop: 40,
//     marginBottom: 350,
//   },
//   ingredientsTitle: {
//     paddingHorizontal: 20,
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 16,
//     color: colors.textDark,
//   },
//   ingredientsListWrapper: {
//     paddingVertical: 20,
//   },
//   ingredientItemWrapper: {
//     backgroundColor: colors.white,
//     paddingHorizontal: 10,
//     borderRadius: 15,
//     shadowColor: colors.black,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 10,
//     marginBottom: 20,
//   },
//   ingredientImage: {
//     resizeMode: 'contain',
//     marginTop: 10,
//   },
//   orderWrapper: {
//     marginTop: 30,
//     marginHorizontal: 20,
//     backgroundColor: colors.primary,
//     borderRadius: 50,
//     paddingVertical: 22,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   orderText: {
//     fontFamily: 'Montserrat-Bold',
//     fontSize: 20,
//     marginRight: 10,
//   },
//   inputNumber:{
//     width: 100,
//     height: 50,
//     marginVertical: 20,
//     paddingVertical: 10,
//     fontSize: 20,
//     fontWeight: 'bold',
//     alignItems: 'flex-start',
//   }
  
// });
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
//import collectionListData from '../assets/data/collectionListData';
import ScanScreen  from './StartScreen'
import {firebaseApp} from '../components/Firebase'
import "firebase/database";




// const collectionListData = [
//   {
//     id: '1',
//     name: 'Chai nhựa',
//     number: 2,
//     image: require('../assets/images/plastic-bottle.jpg')
//   },
//   {
//     id: '2',
//     name: 'Túi nhựa',
//     number: 1.5,
//     image: require('../assets/images/plastic-bag.jpg'),
//   },
//   {
//     id: '3',
//     name: 'Thùng giấy',
//     number: 3,
//     image: require('../assets/images/box.jpg'),
//   },
//   {
//     id: '4',
//     name: 'Giấy',
//     number: 2,
//     image: require('../assets/images/paper-details.jpg'),
//   },
//   {
//     id: '5',
//     name: 'Lon',
//     number: 2.2,
//     image: require('../assets/images/can-details.jpg'),
//   },
//   {
//     id: '6',
//     name: 'Sắt/Thép',
//     number: 4,
//     image: require('../assets/images/iron.jpg'),
//   },
//   {
//     id: '7',
//     name: 'Chai',
//     number: 1.6,
//     image: require('../assets/images/bottle-details.jpg'),
//   },
//   {
//     id: '8',
//     name: 'Kính',
//     number: 1,
//     image: require('../assets/images/glass-details.jpg'),
//   },
//   {
//     id: '9',
//     name: 'Bin',
//     number: 0.5,
//     image: require('../assets/images/battery.jpg'),
//     },
//   {
//     id: '10',
//     name: 'Thiết bị điện tử',
//     image: require('../assets/images/electronic-device.jpg'),
//     number: 0,
//   }, 
// ];







export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListData: []
    };
  }
  componentDidMount() {

    var user = firebaseApp.auth().currentUser;

          firebaseApp.database().ref('users/' +  user.uid ).child('data').on("value",(abc)=>{
            var temp_db=[]
            abc.forEach((doc)=>{
              temp_db.push(doc.val())
            })
            this.setState({
              ListData: temp_db
            })
          })

  }
  render(){ 
    return (
      <View style={styles.container}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
          <Text style={styles.title}>Bộ sưu tập hiện tại</Text>
        </View>
  
  
        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={[styles.ingredientsTitle, {fontSize: 20}]}>Danh sách rác thải</Text>
          <View style={styles.ingredientsListWrapper}>
          <ScrollView>
          {this.state.ListData.map((item) => {
            return (
              <View
                style={[
                  styles.ingredientItemWrapper,
                ]}>
                 
                <View  
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View 
                    style={{
                      marginLeft: 10,
                      flexDirection: 'row',
                      flex: 4,
                      paddingVertical: 10,
                    }}>
                    <Image source={item.image} style={styles.ingredientImage} />
                    <Text style={[{fontSize: 17, paddingVertical: 35, paddingLeft: 10}]}>{item.name}</Text>
                  </View>
                  <View   
                  style={{
                    flexDirection: 'column',
                    paddingTop: 10,
                  }}>
                    <Text style={styles.inputNumber}>{item.amount} Kg</Text>
                  </View>
                </View>
              </View>
            )
          })}
           <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('ScanScreen')
          }>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Đổi điểm</Text>
            <MaterialCommunityIcons
                    name="leaf"
                    size={25}
                    color={colors.white}
                />
          </View>
        </TouchableOpacity>
          </ScrollView>  
          </View>
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
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
    color: colors.green,
    width: '100%',
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
    marginBottom: 350,
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
    color: 'white'
  },
  inputNumber:{
    width: 100,
    height: 50,
    marginVertical: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  }
  
});
