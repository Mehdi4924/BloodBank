import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Powered by NKU Technologies</Text>
      <Text style={styles.text}>www.nkutechnologies.com | (042)35958849</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
    color: 'grey',
  },
});
export default Footer;
