import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Theme from '../../utils/Theme';
import PhoneInput from 'react-native-phone-number-input';
import Images from '../../constants/Images';
import {Btn} from '../../components/Btn';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Card} from 'react-native-paper';
import PatientHeader from '../../components/PatientHeader';
const MobileNumber = props => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground style={styles.main} source={Images.splash}>
          <PatientHeader onBackPress={() => props.navigation.goBack()} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={Images.logo2}
              style={{
                width: 150,
                height: 200,
                alignSelf: 'center',
                marginTop: Theme.hp('3%'),
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
                autoFocus
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                  setphoneNumber(text);
                }}
              />
              <Btn
                containerStyle={styles.con}
                text="Get OTP"
                onPress={() => props.navigation.navigate('OTP')}
                textStyle={styles.textStyle}
              />
            </Card>
            <View style={{marginTop: Theme.hp('2%')}}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
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
});

export default MobileNumber;
