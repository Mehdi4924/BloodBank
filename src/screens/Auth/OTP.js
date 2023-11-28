import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import Theme from '../../utils/Theme';
import OTPTextView from 'react-native-otp-textinput';
import {Btn} from '../../components/Btn';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import {Card} from 'react-native-paper';
import Images from '../../constants/Images';
import PatientHeader from '../../components/PatientHeader';

const OTP = props => {
  const [OTP, setOTP] = useState('');
  const [animation, setAnimation] = useState(false);
  console.log(OTP);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.main} source={Images.splash}>
        <PatientHeader onBackPress={() => props.navigation.goBack()} />
        <Image
          source={Images.logo2}
          style={{
            width: 150,
            height: 200,
            marginTop: Theme.hp('3%'),
            alignSelf: 'center',
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: Theme.white,
              marginTop: Theme.hp('12%'),
              fontSize: Theme.fontMedium,
              fontWeight: '700',
              marginLeft: Theme.wp('4%'),
              marginBottom: Theme.hp('2%'),
            }}>
            Please Enter OTP
          </Text>
          <Card
            style={{
              width: '94%',
              alignSelf: 'center',
              borderRadius: 10,
              paddingVertical: Theme.hp('6%'),
            }}>
            <View style={styles.otp}>
              <OTPTextView
                //ref={(e) => (this.input1 = e)}
                containerStyle={styles.textInputContainer}
                textInputStyle={[styles.roundedTextInput, {borderRadius: 100}]}
                handleTextChange={text => setOTP(text)}
                inputCount={4}
                tintColor={Theme.primary}
                keyboardType="numeric"
              />
            </View>
            <Btn
              containerStyle={styles.con}
              text="Confirm"
              onPress={() => props.navigation.navigate('CompleteProfile')}
              textStyle={styles.textStyle}
            />
            <View style={styles.mainOtp}>
              <Text style={styles.code}>Didn't Received a Code ? </Text>
              <TouchableOpacity>
                <Text style={styles.resend}>Resend </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <View style={{marginTop: Theme.hp('2%')}}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Theme.white,
  },
  roundedTextInput: {
    borderWidth: 1,
  },

  textInputContainer: {
    paddingHorizontal: 20,
  },
  con: {
    backgroundColor: Theme.primary,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: Theme.hp('3%'),
    borderRadius: 30,
  },
  textStyle: {
    fontSize: Theme.fontMedium,
  },
  code: {
    color: Theme.black,
    fontSize: Theme.fontSmall,
    textAlign: 'center',
  },
  resend: {
    color: Theme.primary,
    fontSize: Theme.fontSmall,
    marginLeft: Theme.wp('1%'),
  },
  mainOtp: {
    marginTop: Theme.hp('4%'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 70,
    width: 70,
  },
});

export default OTP;
