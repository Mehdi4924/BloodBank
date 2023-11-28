import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';

import PhoneInput from 'react-native-phone-number-input';

import {Card} from 'react-native-paper';
import Theme from '../../../utils/Theme';
import {Btn} from '../../../components/Btn';
import PatientHeader from '../../../components/PatientHeader';
import Images from '../../../constants/Images';
import {PhoneNumber_validation} from '../../../components/validation';
const PatientMobileNumber = props => {
  const animation = useRef(new Animated.Value(-100)).current;

  const [phoneNumber, setphoneNumber] = useState('');
  const [Error, setError] = useState('');
  const phoneInput = useRef(null);
  const Submit = () => {
    const validate = PhoneNumber_validation(phoneNumber);
    if (validate.valid === true) {
      setError('');
      Animated.timing(animation, {
        toValue: -100,
        duration: 1,
        useNativeDriver: true,
      }).start();
      props.navigation.navigate('PatientOTP');
    } else {
      Animated.timing(animation, {
        toValue: 40,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      setError(validate.errors);
      // console.log(Error);
    }
  };
  const animationStyles = {
    transform: [{translateX: animation}],
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <PatientHeader onBackPress={() => props.navigation.goBack()} />
      <View style={styles.container}>
        <ImageBackground style={styles.main} source={Images.splash}>
          <Image
            source={Images.logo2}
            style={{
              width: 150,
              height: 200,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: Theme.white,
              marginTop: Theme.hp('10%'),
              fontSize: Theme.fontMedium,
              fontWeight: '700',
              marginLeft: Theme.wp('4%'),
              marginBottom: Theme.hp('2%'),
            }}>
            Enter Phone Number
          </Text>
          <Card
            style={{
              width: '94%',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: Theme.hp('6%'),
            }}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="PK"
              layout="first"
              withShadow
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              onChangeFormattedText={text => {
                setphoneNumber(text);
              }}
            />
            {Error != '' && (
              <Animated.Text style={[styles.textError, animationStyles]}>
                {Error}
              </Animated.Text>
            )}
            <Btn
              containerStyle={styles.con}
              text="Get OTP"
              onPress={() => Submit()}
              textStyle={styles.textStyle}
            />
          </Card>
          <View style={{marginTop: Theme.hp('2%')}}></View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.white,
    flex: 1,
    // padding: Theme.wp('7%'),
  },
  phoneContainer: {
    width: '90%',
    // marginTop: Theme.hp('5%'),
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
  },
  textInput: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 0,
  },
  loginImage: {
    alignSelf: 'center',
    width: Theme.wp('40%'),
    height: Theme.wp('40%'),
    marginTop: Theme.hp('8%'),
  },
  con: {
    backgroundColor: Theme.primary,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: Theme.hp('5%'),
  },
  textStyle: {
    fontSize: Theme.fontMedium,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    height: 70,
    // alignSelf: 'center',
    width: 70,
  },
  textError: {
    color: 'red',
  },
});

export default PatientMobileNumber;
