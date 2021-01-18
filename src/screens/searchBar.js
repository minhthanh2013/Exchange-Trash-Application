import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shoppingData from '../assets/data/shoppingData';
import colors from '../assets/colors/colors';
export default searchBar = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item)
  
    return(
      <Text>ABC</Text>
    )
  
}
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
      marginTop: 30,
      paddingHorizontal: 20,
    },
    titlesSubtitle: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: colors.textDark,
    },
    titlesTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      color: colors.green,
      marginTop: 5,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    search: {
      flex: 1,
      marginLeft: 10,
      borderBottomColor: colors.textLight,
      borderBottomWidth: 2,
      fontSize: 17,
  
    },
    searchText: {
      fontFamily: 'Montserrat-Semibold',
      fontSize: 14,
      marginBottom: 0,
      color: colors.textLight,
      paddingVertical: 0,
    },
    categoriesWrapper: {
      marginTop: 10,
    },
    categoriesTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 18,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    categoriesListWrapper: {
      paddingTop: 15,
      paddingBottom: 20,
    },
    categoryItemWrapper: {
      backgroundColor: '#F5CA48',
      marginRight: 15,
      borderRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
      width: 150,
      height: 240,
    },
    categoryItemImage: {
      alignSelf: 'center',
      resizeMode: 'contain',
      height: 150,
      borderRadius: 20,
    },
    categoryIngredientTitle: {
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
      fontSize: 15,
      marginTop: 10,
      fontWeight: 'bold',
    },
    headerLeft: {
      borderColor: colors.textLight,
      borderWidth: 2,
      padding: 8,
      borderRadius: 10,
    },
  });
  