import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default Theme = {
  primary: '#d12a38',
  inputBack: '#F8F8F8',
  grey: '#828282',
  white: '#f0f0f0',
  black: 'black',
  lightWhite: 'white',
  facebookBtn: '#2D509B',
  green: '#689593',
  fontColor: '#1a1918',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  heightPer: Dimensions.get('window').height / 100,
  widthPer: Dimensions.get('window').width / 100,
  fontSmall: hp('2%'),
  fontMedium: hp('2.5%'),
  fontLarge: hp('4%'),
  wp,
  hp,
};
