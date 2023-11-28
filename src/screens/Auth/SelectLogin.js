import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Footer from '../../components/Footer';
import PatientHeader from '../../components/PatientHeader';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const SelectLogin = props => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.main} source={Images.splash}>
        <PatientHeader onBackPress={() => props.navigation.goBack()} />
        <Image
          source={Images.logo2}
          style={{
            width: 150,
            height: 200,
            alignSelf: 'center',
            marginTop: Theme.hp('2%'),
          }}
        />
        <Text
          style={{
            color: Theme.white,
            marginTop: Theme.hp('12%'),
            fontSize: Theme.fontMedium,
            fontWeight: '700',
            marginLeft: Theme.wp('4%'),
            marginBottom: Theme.hp('2%'),
          }}>
          Select Login Type
        </Text>
        <Card
          style={{
            width: '94%',
            alignSelf: 'center',
            borderRadius: 10,
            paddingVertical: Theme.hp('6%'),
          }}>
          <Card
            style={{
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              borderRadius: 40,
            }}
            elevation={10}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('PatientMobileNumber')}
              activeOpacity={0.5}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Theme.black,
                  fontWeight: 'bold',
                  paddingLeft: Theme.wp('3%'),
                }}>
                Login as Regular Patient
              </Text>
              <Image source={Images.next} style={{height: 40, width: 40}} />
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              marginTop: Theme.hp('2%'),
              width: '90%',
              alignSelf: 'center',
              padding: 10,
              borderRadius: 40,
            }}
            elevation={10}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('Login')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: Theme.black,
                  fontWeight: 'bold',
                  paddingLeft: Theme.wp('3%'),
                }}>
                Login as Donor
              </Text>
              <Image source={Images.next} style={{height: 40, width: 40}} />
            </TouchableOpacity>
          </Card>
        </Card>
        <Footer />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
    // justifyContent: 'center',
    // padding: Theme.hp('2%'),
  },
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    height: 70,
    marginTop: Theme.hp('3%'),
    // alignSelf: 'center',
    width: 70,
  },
});
export default SelectLogin;
