import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';
import Theme from '../utils/Theme';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PatientHeader = ({text, name, onBackPress, rightIconPress}) => {
  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={onBackPress}>
        <Ionicons
          name="arrow-back-sharp"
          size={Theme.hp('3.5%')}
          color={Theme.white}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>

      <TouchableOpacity onPress={rightIconPress}>
        <Feather name={name} size={23} color={Theme.primary} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container1: {
    flexDirection: 'row',
    paddingHorizontal: Theme.wp('5%'),
    paddingTop: Theme.hp('2%'),
    // elevation: 5,
    alignItems: 'center',
    backgroundColor: Theme.primary,
    justifyContent: 'space-between',
  },
  arrow: {
    height: 12,
    width: 20,
  },
  text: {
    // marginLeft: Theme.wp('6%'),
    color: Theme.black,
    fontSize: Theme.fontMedium,
    fontWeight: '500',
  },
});

export default PatientHeader;
