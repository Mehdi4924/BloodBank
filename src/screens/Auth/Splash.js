import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Images from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../../utils/Theme';
import {get_data} from '../../components/controller';

const Splash = props => {
  useEffect(() => {
    retrieveData();
    spring();
  }, []);
  const retrieveData = async () => {
    // console.log('press');
    try {
      const value = await get_data('value');
      // console.log(value);
      if (value == null) {
        setTimeout(() => {
          props.navigation.navigate('OnBoarding');
        }, 4000);
      } else {
        setTimeout(() => {
          props.navigation.navigate('SelectLogin');
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  var springValue = new Animated.Value(0.3);
  const spring = () => {
    springValue.setValue(0.2);
    Animated.timing(springValue, {
      useNativeDriver: true,
      toValue: 1,
      friction: 6,
    }).start();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.splash}
        style={{flex: 1, alignItems: 'center'}}>
        <Animated.View
          style={{
            transform: [{scale: springValue}],
            marginTop: Theme.hp('20%'),
          }}>
          <Image source={Images.logo2} style={styles.logo} />
        </Animated.View>

        <ActivityIndicator
          size={Theme.wp('10%')}
          color={Theme.primary}
          style={{marginTop: Theme.hp('30%')}}
        />
        <Footer />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Theme.white,
  },
  logo: {
    height: 250,
    width: 200,
  },
});
export default Splash;
