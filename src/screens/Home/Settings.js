//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  Modal,
  Linking,
  Clipboard,
} from 'react-native';
import Theme from '../../utils/Theme';
import Images from '../../constants/Images';
import Header from '../../components/Header';
import {Card} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FormInput from '../../components/Text_input';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Settings = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setmodalVisible] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const openNumber = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${(042)35958849}';
    } else {
      number = 'tel:${(042)35958849}';
    }
    Linking.openURL(number);
  };
  const copyToClipboard = () => {
    Clipboard.setString(
      'https://sundas-foundation/api/1/invites/get_invite_link',
    );
    console.log(copiedText);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header
            rightIconPress={() => props.navigation.navigate('EditProfile')}
            text="Profile Settings"
            name="edit"
            onBackPress={() => props.navigation.goBack()}
          />
        </View>
        <ScrollView>
          <View>
            <Image source={Images.profile} style={styles.success} />
            <Text style={styles.requested}>Mubashar Ali</Text>
            <View style={styles.proView}>
              <Image source={Images.pin} style={styles.pin} />
              <Text style={styles.pinText}>Johar Town Lahore</Text>
            </View>
            <View style={styles.iconView}>
              <View style={{marginRight: Theme.wp('20%')}}>
                <Image
                  source={Images.don}
                  style={{height: 40, width: 40, alignSelf: 'center'}}
                />
                <Text style={styles.donate}>6 Times Donate</Text>
              </View>
              <View>
                <Image
                  source={Images.droplight}
                  style={{height: 40, width: 29.9, alignSelf: 'center'}}
                />
                <Text style={styles.donate}>Blood Group - AB+</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: Theme.hp('2%'),
                alignSelf: 'center',
              }}>
              <TouchableOpacity style={styles.btn} onPress={() => openNumber()}>
                <Image
                  source={Images.callnow}
                  style={{height: 26, width: 26}}
                />
                <Text style={styles.btnText}>Call Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Assistant')}
                style={[
                  styles.btn,
                  {backgroundColor: Theme.primary, marginLeft: Theme.wp('10%')},
                ]}>
                <Image source={Images.share} style={{height: 22, width: 26}} />
                <Text style={styles.btnText}>Request</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: Theme.hp('3%'),
              }}>
              <Card style={styles.cards}>
                <Text style={styles.group}>A+</Text>
                <Text style={styles.bloodType}>Blood Type</Text>
              </Card>
              <Card style={styles.cards}>
                <Text style={styles.group}>5.12</Text>
                <Text style={styles.bloodType}>Score</Text>
              </Card>
              <Card style={styles.cards}>
                <Text style={styles.group}> 02</Text>
                <Text style={styles.bloodType}>Requested</Text>
              </Card>
            </View>
            <View>
              <View style={styles.rowContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.availability} style={styles.icons} />
                  <Text style={styles.donateText}>Available for donate</Text>
                </View>
                <Switch
                  trackColor={{false: '#767577', true: Theme.primary}}
                  thumbColor={isEnabled ? Theme.white : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <TouchableOpacity
                onPress={() => setmodalVisible(true)}
                activeOpacity={0.7}
                style={[styles.rowContainer, {marginTop: Theme.hp('1%')}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.invite} style={styles.icons} />
                  <Text style={styles.donateText}>Invite a friend</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('GetHelp')}
                activeOpacity={0.7}
                style={[styles.rowContainer, {marginTop: Theme.hp('1%')}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.info} style={styles.icons} />
                  <Text style={styles.donateText}>Get help</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}
                activeOpacity={0.7}
                style={[styles.rowContainer, {marginTop: Theme.hp('1%')}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={Images.logout} style={styles.icons} />
                  <Text style={styles.donateText}>Sign out</Text>
                </View>
              </TouchableOpacity>
              <View style={{marginTop: Theme.hp('10%')}}></View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign
              onPress={() => setmodalVisible(false)}
              name="close"
              size={Theme.hp('3%')}
              style={{position: 'absolute', right: 20, top: 10}}
              color={Theme.black}
            />
            <View>
              <View style={styles.back}>
                <Text
                  style={{
                    color: Theme.grey,
                    fontSize: Theme.hp('1.6%'),
                    width: '85%',
                    paddingLeft: Theme.wp('4%'),
                    // paddingRight: Theme.wp('2%'),
                  }}>
                  https://sundas-foundation/api/1/invites/get_invite_link
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    copyToClipboard(), setCopiedText(true);
                  }}>
                  <Feather
                    name="copy"
                    size={Theme.hp('3%')}
                    color={Theme.grey}
                    style={{marginRight: Theme.wp('2%')}}
                  />
                </TouchableOpacity>
              </View>
              {copiedText && (
                <Text style={{color: 'green', textAlign: 'center'}}>
                  Link Copied to Clipboard
                </Text>
              )}
            </View>
            {/* <FormInput
              rightIconStyle={styles.iconStyle}
              onChangeText={inviteLink => setinviteLink(inviteLink)}
              iconName="copy"
              icon_color={Theme.black}
              containerStyle={[styles.back, {justifyContent: 'flex-start'}]}
              text_input_container={styles.text_input_container}
              text={{borderBottomWidth: 0}}
              onPress_icon={() => copyToClipboard()}
              placeholder="https://sundas-foundation/api/1/invites/
              get_invite_link"
            /> */}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  back: {
    backgroundColor: Theme.inputBack,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    width: Theme.wp('75%'),
    justifyContent: 'space-between',
    height: Theme.hp('6%'),
    marginTop: Theme.hp('2%'),
    // marginVertical: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: Theme.lightWhite,
    width: Theme.wp('92%'),
    alignSelf: 'center',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 15,
    marginTop: Theme.hp('2%'),
  },
  donateText: {
    color: Theme.grey,
    marginLeft: Theme.wp('3%'),
  },
  icons: {
    height: 30,
    width: 30,
  },
  cards: {
    elevation: 5,
    padding: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  group: {
    textAlign: 'center',
    fontSize: Theme.fontMedium,
    color: Theme.black,
    fontWeight: 'bold',
  },
  bloodType: {
    color: Theme.grey,
    textAlign: 'center',
  },
  headerContainer: {
    elevation: 5,
    backgroundColor: Theme.lightWhite,
    padding: Theme.wp('5%'),
  },
  success: {
    borderColor: Theme.lightWhite,
    borderWidth: 5,
    borderRadius: 60,
    height: 100,
    alignSelf: 'center',
    marginTop: Theme.hp('3%'),
    width: 100,
  },
  requested: {
    fontSize: Theme.fontMedium,
    color: Theme.black,
    textAlign: 'center',
  },
  btn: {
    paddingHorizontal: Theme.wp('7%'),
    backgroundColor: Theme.green,
    padding: 10,

    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: Theme.white,
    marginLeft: Theme.wp('3%'),
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Theme.hp('2%'),
  },
  proView: {
    flexDirection: 'row',
    marginTop: Theme.hp('0.5%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  pin: {height: 13, width: 12},
  pinText: {
    color: Theme.grey,
    marginLeft: Theme.wp('2%'),
  },
  groupText: {
    color: Theme.white,
    marginTop: Theme.hp('1%'),
    fontSize: Theme.fontSmall,
  },
  donate: {color: Theme.black, marginTop: Theme.hp('1%')},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(115, 115, 115,0.4)',
  },
  modalView: {
    padding: Theme.hp('4%'),
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
    elevation: 5,
  },
  text_input_container: {
    width: Theme.wp('73%'),
    borderRadius: 4,
  },
  iconStyle: {
    marginRight: Theme.wp('3%'),
  },
});

export default Settings;
