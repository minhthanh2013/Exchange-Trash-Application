import React, {Component} from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import coorData from '../assets/data/coorData'
import {getPreciseDistance} from 'geolib';
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';


const GOOGLE_MAPS_APIKEY = 'AIzaSyBn8hNNN6_6vpLa2AHogapORT-3Dbl2GJo';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
var min;
var obj;
var dis;


export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      widthPath: 0,
      widthPathNew: 0,
      selected: false,
    };
  }
 
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
       
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  onChangeColor() {
    this.setState({widthPath: 4})
  }

  onSelect = data => {
    this.setState(data);
  }

  markerClick(item){
    let id = item.id;
    //console.log(this.props.navigation);
    //console.log(item);
    this.props.navigation.navigate('DestDetail', {
      itemID: id,
      objParam: item,
      onSelect: this.onSelect,
    });
    this.setState({widthPath: 0})
  }

  

  render() {
    var objCoordinate = {latitude : 10.766261439240813, longitude: 106.66401069862584};
    if (this.props.route.params !== undefined) {
      objCoordinate = this.props.route.params.objCoordinate;
    }

    return (
      <View style={styles.container}>
        <View style={{Height: (Height/10)*2, width: Width}}>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.headerWrapper}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={styles.headerLeft}>
                  <Feather name="chevron-left" size={17} color='#313234' />
                </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}> 
                <TouchableOpacity
                >
                    <Feather name="shopping-bag" size={24} color='#313234' />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>

          {/* Titles */}
          <View style={[styles.titlesWrapper, {flexDirection:'row'}]}>
            <Text style={styles.titlesTitle}>Địa điểm thu gom</Text>
          </View>
        </View>
        <View style={styles.mapWrapper}>
        
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        {/*render dia diem hien tai cua user */}
        <Marker coordinate={this.state} title={'Vị trí của bạn'}  >
          <Image
            source={require('../assets/images/map-marker-user.png')}
            style={[styles.pin, {width: 50}]}
          />
          <Callout>
            <View style={styles.tooltipWraper}>
              <Text style={styles.tooltipText}>Địa chỉ hiện tại của bạn</Text>
            </View>
          </Callout>
        </Marker>
        
        {/* render nhung dia diem thu rac */}
        {coorData.map((item, i) => {
          dis = getPreciseDistance(
            {latitude: item.coordinate.latitude, longitude: item.coordinate.longitude},
            {latitude: this.state.latitude, longitude: this.state.longitude},
          );
          
          if (i == 0) {
            min = dis;
          }

          if (i !== 0 && dis < min) {
            min = dis;
            obj = item;
          }
        
          return (  
            <View key={i}>
              
              <Marker coordinate={item.coordinate}  onPress={() => {this.markerClick(item)}}>
                <Image
                    source={require('../assets/images/map-marker.png')}
                    style={styles.pin}
                />
              </Marker>
              
            </View>
          );
        })}
        {/*
        <MapViewDirections 
          origin={{latitude : this.state.latitude, longitude: this.state.longitude}}
          destination={{latitude : obj.coordinate.latitude, longitude: obj.coordinate.longitude}}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={this.state.widthPath}
          strokeColor="#1d69db"
        />
        <MapViewDirections 
          origin={{latitude : this.state.latitude, longitude: this.state.longitude}}
          destination={{latitude : objCoordinate.latitude, longitude: objCoordinate.longitude}}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={this.state.widthPathNew}
          strokeColor="#1d69db"
        />*/}
        </MapView>
        </View>
        <View style={styles.suggestWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Feather name="thumbs-up" size={19}/>
            <Text style={styles.suggestText}> Gợi ý địa điểm thu gom gần với bạn nhất: </Text>
          </View>
          <Text style={styles.destName}>{obj.name}</Text>
          <View style={styles.guideWrapper}>
            <TouchableOpacity style={styles.guide} onPress={() => this.onChangeColor()}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.guideText}>Chỉ đường </Text>
                <Feather name="map-pin" size={22} color='white'/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    height: Height,
    width: Width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapWrapper: {
    height: (Height/10)*7,
    width: Width,
  },
  pin: {
    width: 70, 
    height: 70,
    resizeMode: 'contain',
  },
  tooltipWraper: {
    backgroundColor: 'white',
    padding: 7,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  tooltipText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  suggestWrapper: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  suggestText: {
    fontSize: 17, 
    fontWeight: 'bold',
  },
  destName: {
    fontSize: 16,
    marginLeft: 25,
  },
  guideWrapper: {
    width: (Width/5)*2,
    marginTop: 7,
    marginLeft: 25,
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
 });

