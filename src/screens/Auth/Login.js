import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import Footer from '../../components/Footer';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const Login = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={Images.logo1} style={styles.loginImage} />
        <View style={styles.mainWelcome}>
          <Text style={styles.welcome}>Welcome to,</Text>
          <Text style={styles.sundas}>Sundas Foundation Blood Bank</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DashBoard')}
          style={styles.fbBtn}
          activeOpacity={0.5}>
          <Image style={styles.fbLogo} source={Images.facebook} />
          <Text style={styles.fbText}>Facebook</Text>
          <View></View>
        </TouchableOpacity>
        {Platform.OS == 'ios' ? (
          <TouchableOpacity style={styles.googleBtn} activeOpacity={0.5}>
            <Image style={styles.apple} source={Images.apple} />
            <Text style={styles.gText}>Apple</Text>
            <View></View>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('DashBoard')}
          style={styles.googleBtn}
          activeOpacity={0.5}>
          <Image style={styles.gLogo} source={Images.google} />
          <Text style={styles.gText}>Google</Text>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MobileNumber')}
          style={styles.googleBtn}
          activeOpacity={0.5}>
          <Image style={styles.phone} source={Images.phone} />
          <Text style={styles.gText}>Mobile Number</Text>
          <View></View>
        </TouchableOpacity>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.white,
    flex: 1,
  },
  welcome: {
    textAlign: 'center',
    color: Theme.primary,
    fontSize: Theme.fontLarge,
    fontWeight: 'bold',
  },
  sundas: {
    fontSize: Theme.fontSmall,
    color: Theme.black,
  },
  mainWelcome: {
    bottom: Theme.hp('-2%'),
    alignSelf: 'center',
    marginLeft: Theme.wp('5%'),
  },
  backInput: {
    width: Theme.wp('80%'),
    borderLeftColor: 'grey',
    borderRadius: 0,
    marginLeft: Theme.wp('4%'),
    borderLeftWidth: 1,
    borderRadius: 4,
  },
  input: {
    color: Theme.black,
  },
  userIcon: {
    height: 20,
    width: 20,
    marginRight: Theme.wp('2%'),
  },
  lockIcon: {
    height: 20,
    width: 17,
    marginRight: Theme.wp('2%'),
  },
  inputContainer: {
    marginTop: Theme.hp('7%'),
  },
  btnn: {
    marginTop: Theme.hp('2%'),
  },
  forgot: {
    color: Theme.primary,
    fontSize: Theme.fontSmall,
    textAlign: 'right',
    marginTop: Theme.hp('1%'),
  },
  containerStyle: {
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: Theme.inputBack,
    marginTop: '3%',
  },
  btn: {
    borderRadius: 4,
    backgroundColor: Theme.primary,
    padding: 12,
  },

  loginImage: {
    alignSelf: 'center',
    width: Theme.wp('40%'),
    height: Theme.wp('40%'),
    marginTop: Theme.hp('8%'),
  },
  fbBtn: {
    marginTop: Theme.hp('6%'),
    padding: Theme.wp('2.6%'),
    backgroundColor: Theme.facebookBtn,
    width: Theme.wp('76%'),
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  fbLogo: {
    height: 26,
    width: 12,
  },
  fbText: {
    color: Theme.white,
    fontSize: Theme.fontMedium,
  },
  googleBtn: {
    marginTop: Theme.hp('3%'),
    padding: Theme.wp('2%'),
    backgroundColor: Theme.white,
    width: Theme.wp('76%'),
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.grey,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  gText: {
    fontSize: Theme.fontMedium,
    color: Theme.black,
  },
  gLogo: {
    height: 28,
    width: 28,
  },
  phone: {
    height: 25,
    width: 25,
    marginLeft: Theme.wp('5%'),
  },
  apple: {
    height: 30,
    width: 30,
  },
});

export default Login;
