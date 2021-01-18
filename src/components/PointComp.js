import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {firebaseApp} from '../components/Firebase'
import "firebase/database";


export default class PointComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: ''
    };
  }
  componentDidMount() {

  var user = firebaseApp.auth().currentUser;
  firebaseApp.database().ref('users/' +  user.uid ).child('user_point').on("value",(abc)=>{
    this.setState({
      point: abc.val()
    })
  })
  }
render(){
  return(
    <View style={[styles.pointWrapper]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingTop: 15}}>
              <View style={styles.pointTopWrapper}>
                <Text style={styles.point}>Điểm của bạn :</Text>
              </View>
              <View style={styles.pointTitlesWrapper}>
                <Text 
                style={styles.pointTitlesTitle}>
                {this.state.point}
                </Text>
                <MaterialCommunityIcons
                    name="leaf"
                    size={33}
                    color={colors.green}
                />
              </View>
            </View>
            <View style={styles.pointCardRight}>
              <Image source={require('../assets/images/recycle.png')} style={styles.pointCardImage} />
            </View>
          </View>
  </View>
  );
}
}
// export default Point = () => {
//     const navigation = useNavigation();
//     var point
//   //   var user = firebaseApp.auth().currentUser;
//   // firebaseApp.database().ref('users/' +  user.uid ).child('user_point').on("value",(abc)=>{
//   //   point=abc.val()
//   // })

//     return(
//     <View style={styles.pointWrapper}>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Amount')
//       }>
//         <View>
//           <View style={{flexDirection: 'row'}}>
//             <View style={{paddingTop: 15}}>
//               <View style={styles.pointTopWrapper}>
//                 <Text style={styles.point}>Điểm của bạn :</Text>
//               </View>
//               <View style={styles.pointTitlesWrapper}>
//                 <Text 
//                 style={styles.pointTitlesTitle}>
//                  100
//                 </Text>
//                 <MaterialCommunityIcons
//                     name="leaf"
//                     size={33}
//                     color={colors.green}
//                 />
//               </View>
//             </View>
//             <View style={styles.pointCardRight}>
//               <Image source={require('../assets/images/recycle.png')} style={styles.pointCardImage} />
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//   </View>
//   );
// }


const styles = StyleSheet.create({    
    pointWrapper: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
    },
    pointTopWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 15,
    },
    point: {
      marginTop: 10,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 25,
      fontWeight: 'bold'
    },
    pointTitlesWrapper: {
      flexDirection: 'row',
      marginTop: 5,
      marginLeft: 60,
    },
    pointTitlesTitle: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 30,
      color: colors.green,
      marginRight: 5,
    },
    pointCardRight: {
      marginLeft: 0,
      marginTop: 0,
    },
    pointCardImage: {
      width: 240,
      height: 130,
      resizeMode: 'contain',
    },
    pointWrapper: {
      backgroundColor: colors.white,
      paddingHorizontal: 15,
      borderRadius: 15,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 0,
      marginHorizontal: 15,
    },
  });
  