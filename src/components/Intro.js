import React, { Component } from 'react';
import { Text, StatusBar, View, Image, Animated, Platform, StyleSheet } from 'react-native';
import { Pages } from 'react-native-pages';
import { Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import colors from '../assets/colors/colors';

Platform.select({
  ios: () => StatusBar.setBarStyle('light-content'),
  android: () => StatusBar.setBackgroundColor('#263238'),
})();

let styles = StyleSheet.create({
  image: {
    width: null,
    height: null,
    resizeMode: 'stretch',
    flex: 1,
  },
  imageSlide: {
    width: null,
    height: null,
    resizeMode: 'stretch',
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#263238',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 52,
  },

  index: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, .63)',
  },
});

/* eslint-disable react/prop-types */

let Label = ({ color, backgroundColor, text, effect, index, pages, progress }) => {
  let style = { color };

  switch (effect) {
    case 'skew':
      style.transform = [{
        skewX: progress.interpolate({
          inputRange: [-0.75, 0, 0.75],
          outputRange: ['45deg', '0deg', '-45deg'],
        }),
      }];
      break;

    case 'rise':
      style.transform = [{
        translateY: progress.interpolate({
          inputRange: [-0.5, 0, 0.5],
          outputRange: [50, 0, -50],
        }),
      }];

      style.opacity = progress.interpolate({
        inputRange: [-0.5, 0, 0.5],
        outputRange: [0, 1, 0],
      });
      break;

    case 'zoom':
      style.transform = [{
        scale: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [4, 1, 0],
        }),
      }];

      style.opacity = progress.interpolate({
        inputRange: [-0.25, 0, 1],
        outputRange: [0, 1, 1],
      });
      break;

    case 'flip':
      style.transform = [{
        rotate: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: ['360deg', '0deg', '-360deg'],
        }),
      }];
      break;

    case 'slide':
      style.transform = [{
        translateX: progress.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-100, 0, 100],
        }),
      }];
      break;
  }

  return (
    <View style={[styles.textContainer, { backgroundColor }]}>
      <Animated.Text style={[styles.text, style]}>
        {text}
        {'\n'}
        <Animated.Text style={styles.index}>{`[${index + 1} / ${pages}]`}</Animated.Text>
      </Animated.Text>
    </View>
  );
};

/* eslint-enable */

const Intro = ({navigation}) => (

        <View style={styles.container}>
          <Pages
            indicatorColor='#036317'
            indicatorOpacity={0.7}>
            <Image source={require('../assets/images/intro-slide1.png')} style={styles.imageSlide} />
            <Image source={require('../assets/images/intro-slide2.jpg')} style={styles.imageSlide} />
            <Image source={require('../assets/images/intro-slide3.png')} style={styles.imageSlide} />
            {/*}
            <Label color={colors.green} backgroundColor={colors.white} text='Thu gom rác thải' effect='skew' />
            <Label color={colors.green} backgroundColor={colors.white} text='và' effect='rise' />
            <Label color={colors.green} backgroundColor={colors.white} text='Tái chế rác thải'  effect='zoom' />
            <Label color={colors.green} backgroundColor={colors.white} text='Bảo vệ' effect='flip' />
            <Label color={colors.green} backgroundColor={colors.white} text='Môi trường' effect='slide' />*/}
          </Pages>

          <Pages
            horizontal={false}
            indicatorPosition='left'
            indicatorColor='#036317'
            indicatorOpacity={0.7}
          >
            <Image source={require('../assets/images/intro-recycle1.png')} style={styles.image} />
            <Image source={require('../assets/images/intro-recycle2.png')} style={styles.image} />
            <Image source={require('../assets/images/intro-recycle3.png')} style={styles.image} />
          </Pages>

          <Button
            mode ="outlined"
            onPress = {
                ()=> navigation.navigate('Home')
            }
            style={{backgroundColor: colors.green}}
          >
            <Text style={{color: colors.white, fontSize: 17, fontWeight: 'bold'}}>
              Bắt đầu !
            </Text>
          </Button>
        </View>

)
   
export default Intro
