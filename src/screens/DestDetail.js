import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class DestDetail extends React.Component {
  markerClick(obj) {
    //console.log(obj);
    this.props.navigation.navigate('map',  {
      objCoordinate: obj,
    });

    this.props.route.params.onSelect({widthPathNew: 4});
  }
    render (){
      let obj = this.props.route.params.objParam;
      //console.log(this.props.route);
      return(
        <View style={{flex: 1}}>
          <View style={{flex: 4}}>
            <View style={{flex: 1}}>
              {/* Header */}
              <SafeAreaView>
                <View style={styles.headerWrapper}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <View style={styles.headerLeft}>
                      <Feather name="chevron-left" size={17} color='#313234' />
                    </View>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}> 
                    <Feather name="menu" size={24} color='#313234' style={{marginRight: 20}}/>
                    <TouchableOpacity
                    >
                        <Feather name="shopping-bag" size={24} color='#313234' />
                    </TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>

              {/* Titles */}
              <View style={[styles.titlesWrapper, {flexDirection:'row'}]}>
                <Text style={styles.titlesTitle}>{obj.name}</Text>
              </View>
            </View>
            <View style={{flex: 4}}>
            <Image source={obj.image} style={styles.itemImage}/>
            </View>
          </View>

          
          <View style={{flex: 3, flexDirection: 'column', backgroundColor: 'white', padding: 20}}>
            <View style={[styles.detailItem, {flex: 1}]}>
              <Text style={styles.detailTitle}>Địa chỉ</Text>
              <Text style={[styles.detailText]}>{obj.adress}</Text>
            </View>
            <View style={[styles.detailItem, {flex: 1}]}>
              <Text style={styles.detailTitle}>Chi tiết</Text>
              <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.detailText]}>Giờ mở cửa</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                  <Text style={styles.detailText}>{obj.detail.hour}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.detailText]}>Số điện thoại</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                  <Text style={styles.detailText}>{obj.detail.phone}</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 20}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.detailText]}>Người tiếp nhận</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                  <Text style={styles.detailText}>{obj.detail.person}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.detailItem, {flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
            <View style={styles.guideWrapper}>
              <TouchableOpacity style={styles.guide} onPress={() => {this.markerClick(obj.coordinate)}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.guideText}>Chỉ đường </Text>
                  <Feather name="map-pin" size={22} color='white'/>
                </View>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </View>
      );
    }
  }

export default DestDetail;

const styles = StyleSheet.create({
  container: {
    height: Height,
    width: Width,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  titlesWrapper: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: '#313234',
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 17,
    color: '#313234',
    marginTop: 5,
  },
  headerLeft: {
    borderColor: '#757575',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
  itemImage : {
    width: Width,
    height: (Height/9)*4,
  },
  detailText: {
    fontSize: 16,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 16, 
  },
  detailItem: {
    flex: 1,
  },
  guideWrapper: {
    width: (Width/5)*2,
    marginLeft: 25,
    marginTop: 20,
  },
  guide: {
    backgroundColor: '#137536',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5,
  },
  guideText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  },
 });

