import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
import Menu from '../assets/data/Menu'
import PointComp from '../components/PointComp'
import ProfileAva from '../components/ProfileAva'
//import PointComp from '../components/PointComp'

Feather.loadFont();
MaterialCommunityIcons.loadFont();


  


export default Home = ({ navigation }) => {


  const renderCategoryItem = ({ item }) => {
    return (
        <TouchableOpacity
          onPress = {() => 
            navigation.navigate(item.page)
          }
        >
          <View
            style={[
              styles.categoryItemWrapper,
              {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 'a' ? 20 : 0,
              },
            ]}>
              <Image source={item.image} style={styles.categoryItemImage} />
              <Text style={styles.categoryItemTitle}>{item.title}</Text>
              <View
                style={[
                  styles.categorySelectWrapper,
                  {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                  },
                ]}>
                <Feather
                  name="chevron-right"
                  size={17}
                  style={styles.categorySelectIcon}
                  color={item.selected ? colors.black : colors.white}
                />
              </View>
          </View>
        </TouchableOpacity>
    );
  };

  return (
    
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
            onPress={()=>
              navigation.navigate('Profile')
            }>
            {/*
            <Image
              source={{uri:getURL()}}
              style={styles.profileImage}
            /> */}
            <ProfileAva style={styles.profileImage}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}> 
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ShoppingCart')
                }>
                  <Feather name="shopping-bag" size={24} color={colors.textDark} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Image
                source={require('../assets/images/logonew.png')}
                style={styles.logoImage}
            />
            <View>
            <Text style={{fontSize: 30, color: colors.green, fontWeight: 'bold'}}> Greenie</Text>
            <Text style={styles.titlesSubtitle}>   Cùng nhau bảo vệ môi trường</Text>
            </View>
          </View>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={22} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Tìm kiếm</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Danh mục</Text>
          <View style={styles.categoriesListWrapper}>
              <FlatList
                data={Menu}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal={true} 
              />
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() =>
            navigation.navigate('Amount')
            
          }>
            <PointComp/>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: colors.textDark,
    marginTop: -5,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: 17,
    marginBottom: 0,
    color: colors.textLight,
    paddingVertical: 0,
  },
  categoriesWrapper: {
    marginTop: 35,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    width: 130,
  },
  categoryItemImage: {
    width: 80,
    height: 80,
    marginTop: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  logoImage: {
    width: 60,
    height: 60,
  },
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
  }
});
