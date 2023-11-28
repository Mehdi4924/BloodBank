import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import Theme from '../../utils/Theme';
import Onboarding from 'react-native-onboarding-swiper';
import Images from '../../constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {get_data, save_data} from '../../components/controller';

const OnBoarding = props => {
  const setView = async () => {
    try {
      await save_data('value', 'true');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Onboarding
          skipToPage={1}
          onDone={() => {
            setView(), props.navigation.navigate('SelectLogin');
          }}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={Images.slide3} style={styles.slide2} />,
              title: 'Donate  Blood',

              subtitle:
                'A life may depend on a gesture from you, a bottle of Blood. The Blood Donor of today may be recipient of tomorrow.',
            },
            {
              backgroundColor: '#d12a38',
              image: <Image source={Images.slide4} style={styles.slide} />,
              title: 'Search Blood Donor',
              subtitle:
                'Donating blood is one of the easiest ways to help save lives. In fact, each pint of blood donated can save up to three lives',
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  slide: {
    height: 250,
    width: 240,
  },
  slide2: {
    height: 260,
    width: 250,
  },
});

export default OnBoarding;
