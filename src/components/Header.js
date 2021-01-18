import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
{/*import { theme } from '../core/theme'*/}
import colors from '../assets/colors/colors';

const Header = (props) => <Text style={styles.header} {...props} />

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: colors.green,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})

export default Header
