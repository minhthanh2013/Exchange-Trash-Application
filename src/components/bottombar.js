import React from 'react';
import Home from '../components/Home';
import Profile from '../components/Profile1'
import Shopping from '../screens/Shopping'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

const Tab = createBottomTabNavigator();

const bottomTab= () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={
      {
        activeTintColor: colors.green,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />

          ),
        }}
      />
      <Tab.Screen
        name="Notificatasdions"
        component={Shopping}
        options={{
          tabBarLabel: 'Đổi quà',
          tabBarIcon: ({ color, size }) => (
            <Icon name="gift" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Trang cá nhân',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
);


export default bottomTab