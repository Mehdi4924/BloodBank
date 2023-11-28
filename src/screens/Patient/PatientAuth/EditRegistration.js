import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Theme from '../../../utils/Theme';
import Images from '../../../constants/Images';
import FormInput from '../../../components/Text_input';
import {Btn} from '../../../components/Btn';

const EditRegistration = props => {
  const [group, setGroup] = useState('B+');
  const [modalVisible, setModalVisibl] = useState(false);
  const data = [
    {
      id: 0,
      name: 'A+',
    },
    {
      id: 1,
      name: 'A-',
    },
    {
      id: 2,
      name: 'B+',
    },
    {
      id: 3,
      name: 'B-',
    },
    {
      id: 4,
      name: 'AB+',
    },
    {
      id: 5,
      name: 'AB-',
    },
    {
      id: 6,
      name: 'O+',
    },
    {
      id: 7,
      name: 'O-',
    },
  ];
  const location = [
    {
      id: 0,
      name: 'Lahore Branch',
    },
    {
      id: 1,
      name: 'Gujranwala Branch',
    },
    {
      id: 2,
      name: 'Gujrat Branch',
    },
    {
      id: 3,
      name: 'Islamabad Branch',
    },
    {
      id: 4,
      name: 'Faisalabad Branch',
    },
  ];
  const catagory = [
    {
      id: 0,
      name: 'Thalesemia',
    },
    {
      id: 1,
      name: 'Hemophilia',
    },
    {
      id: 2,
      name: 'RBD',
    },
    {
      id: 3,
      name: 'B Thlesemia Major',
    },
    {
      id: 4,
      name: 'B Thlesemia',
    },
  ];
  const [man, setMan] = useState(true);
  const [mapModal, setMapModal] = useState(false);
  const [City, setCity] = useState('');
  const [FullName, setFullName] = useState('');
  const [ProfileImage, setProfileImage] = useState('');
  const [LocationView, setLocationView] = useState(false);
  const [LocationValue, setLocationValue] = useState('');
  const [PatientView, setPatientView] = useState(false);
  const [patientValue, setPatientValue] = useState('');
  const [Age, setAge] = useState('');

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        selectionLimit: 1,
      },
      async response => {
        setProfileImage(response.assets[0].uri);
        console.log(ProfileImage);
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={{marginTop: Theme.hp('1%')}}>
            <FlatList
              // style={{zIndex: -1}}
              showsVerticalScrollIndicator={false}
              bounces={false}
              ListHeaderComponent={
                <View>
                  <View style={{marginBottom: Theme.hp('3%')}}>
                    <ImageBackground
                      source={
                        ProfileImage == ''
                          ? Images.profile
                          : {uri: ProfileImage}
                      }
                      imageStyle={{borderRadius: 50}}
                      style={styles.pro}>
                      <TouchableOpacity
                        style={styles.camerView}
                        onPress={() => pickImage()}>
                        <AntDesign
                          name="camera"
                          size={22}
                          color={Theme.primary}
                          style={styles.camera}
                        />
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => setLocationView(!LocationView)}
                      style={[styles.back, {justifyContent: 'space-between'}]}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons
                          name="ios-location-sharp"
                          size={23}
                          color={Theme.primary}
                          style={{marginLeft: Theme.wp('5%')}}
                        />
                        <Text
                          style={{
                            color: Theme.grey,
                            paddingLeft: Theme.wp('2%'),
                          }}>
                          {LocationValue
                            ? LocationValue
                            : 'Registration Location'}
                        </Text>
                      </View>
                      <AntDesign
                        name="down"
                        color={Theme.black}
                        size={Theme.hp('2%')}
                        style={{marginRight: Theme.wp('3%')}}
                      />
                    </TouchableOpacity>
                    {LocationView && (
                      <View
                        style={{
                          backgroundColor: Theme.white,
                          width: '96%',
                          alignSelf: 'center',
                          marginTop: Theme.hp('6%'),
                          position: 'absolute',
                          zIndex: 1,
                        }}>
                        {location.map((item, index) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                setLocationView(false),
                                  setLocationValue(item.name);
                              }}
                              style={{
                                backgroundColor: Theme.lightWhite,
                              }}>
                              <Text
                                style={{
                                  color: Theme.black,
                                  padding: 5,
                                  borderBottomColor: Theme.grey,
                                  borderBottomWidth: 0.3,
                                  marginVertical: '2%',
                                }}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => setPatientView(!PatientView)}
                      style={[styles.back, {justifyContent: 'space-between'}]}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto
                          name="bed-patient"
                          size={23}
                          color={Theme.primary}
                          style={{marginLeft: Theme.wp('5%')}}
                        />
                        <Text
                          style={{
                            color: Theme.grey,
                            paddingLeft: Theme.wp('2%'),
                          }}>
                          {patientValue ? patientValue : 'Patient Catagory'}
                        </Text>
                      </View>
                      <AntDesign
                        name="down"
                        color={Theme.black}
                        size={Theme.hp('2%')}
                        style={{marginRight: Theme.wp('3%')}}
                      />
                    </TouchableOpacity>
                    {PatientView && (
                      <View
                        style={{
                          backgroundColor: Theme.white,
                          width: '96%',
                          alignSelf: 'center',
                          marginTop: Theme.hp('6%'),
                          position: 'absolute',
                          zIndex: 1,
                        }}>
                        {catagory.map((item, index) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                setPatientView(false),
                                  setPatientValue(item.name);
                              }}
                              style={{
                                backgroundColor: Theme.lightWhite,
                              }}>
                              <Text
                                style={{
                                  color: Theme.black,
                                  padding: 5,
                                  borderBottomColor: Theme.grey,
                                  borderBottomWidth: 0.3,
                                  marginVertical: '2%',
                                }}>
                                {item.name}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>
                  <FormInput
                    onChangeText={fullname => setFullName(fullname)}
                    containerStyle={styles.back}
                    iconName_s="user"
                    iconStyle={styles.iconStyle}
                    text_input_container={styles.text_input_container}
                    text={{borderBottomWidth: 0}}
                    placeholder="Full Name"
                  />

                  <FormInput
                    onChangeText={age => setAge(age)}
                    containerStyle={styles.back}
                    iconName_s="user"
                    keyboardType="number-pad"
                    iconStyle={styles.iconStyle}
                    text_input_container={styles.text_input_container}
                    text={{borderBottomWidth: 0}}
                    placeholder="Age"
                  />
                  <Text style={styles.gend}>Gender</Text>
                  <View style={styles.genderContainer}>
                    <TouchableOpacity onPress={() => setMan(!man)}>
                      <Image
                        source={!man ? Images.man : Images.man1}
                        style={styles.man}
                      />
                      <Text style={!man ? styles.male : styles.male1}>
                        Male
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.divider}></View>
                    <TouchableOpacity onPress={() => setMan(!man)}>
                      <Image
                        source={man ? Images.women1 : Images.women}
                        style={styles.man}
                      />
                      <Text style={!man ? styles.male1 : styles.male}>
                        Female
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <FormInput
                    onChangeText={City => setCity(City)}
                    containerStyle={styles.back}
                    iconName_s="idcard"
                    keyboardType="number-pad"
                    iconStyle={styles.iconStyle}
                    text_input_container={styles.text_input_container}
                    text={{borderBottomWidth: 0}}
                    placeholder="ID-Card Number"
                  />
                  <Text style={styles.gend}>Select Blood Group</Text>
                </View>
              }
              ListFooterComponent={
                <View>
                  <Btn
                    textStyle={{fontSize: 16}}
                    text="Done"
                    onPress={() => setModalVisibl(true)}
                    containerStyle={styles.btn}
                  />
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setModalVisibl(!modalVisible);
                    }}>
                    <View
                      style={[styles.centeredView, {justifyContent: 'center'}]}>
                      <View style={styles.modalView}>
                        <Image source={Images.success} style={styles.success} />
                        <Text style={styles.requested}>
                          Your Registration is Updated Succefully
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisibl(false)}>
                          <Image source={Images.next} style={styles.next} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </View>
              }
              data={data}
              showsHorizontalScrollIndicator={false}
              numColumns={5}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={
                    group == item.name
                      ? [
                          styles.cardStyle,
                          {backgroundColor: Theme.primary, borderWidth: 0},
                        ]
                      : styles.cardStyle
                  }
                  onPress={() => setGroup(item.name)}>
                  <Text
                    style={
                      group == item.name
                        ? [styles.title, {color: Theme.white}]
                        : styles.title
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  map: {
    height: Theme.hp('90%'),
    width: Theme.wp('100%'),
  },
  city: {
    paddingLeft: Theme.wp('5%'),
  },
  country: {
    marginLeft: Theme.wp('4%'),
    color: Theme.grey,
  },
  main: {
    paddingHorizontal: Theme.hp('3%'),
  },
  iconStyle: {
    paddingLeft: Theme.wp('4%'),
    color: Theme.primary,
  },
  back: {
    backgroundColor: Theme.inputBack,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    height: Theme.hp('7%'),
    marginVertical: 5,
  },
  text_input_container: {
    width: Theme.wp('80%'),
    borderRadius: 50,
  },
  gend: {
    color: Theme.black,
    fontSize: Theme.fontMedium,
    paddingLeft: Theme.wp('4%'),
    marginTop: Theme.hp('2%'),
  },

  man: {
    height: 50,
    width: 50,
  },
  divider: {
    backgroundColor: Theme.grey,
    width: 1,
    height: Theme.hp('7%'),
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('3%'),
    justifyContent: 'space-evenly',
  },
  cardStyle: {
    flexDirection: 'row',
    marginLeft: Theme.wp('3%'),
    marginTop: Theme.hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderColor: Theme.grey,
    borderRadius: 100,
  },
  title: {
    color: Theme.black,
  },
  male: {
    color: Theme.grey,
    textAlign: 'center',
    marginTop: Theme.hp('1%'),
  },
  male1: {
    color: Theme.primary,
    textAlign: 'center',
    marginTop: Theme.hp('1%'),
  },
  pro: {
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  camerView: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(115, 115, 115,0.4)',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  success: {
    height: 180,
    width: 218,
  },
  requested: {
    textAlign: 'center',
    marginTop: Theme.hp('3%'),
    color: Theme.grey,
  },
  next: {
    height: 45,
    width: 45,
    marginTop: Theme.hp('2%'),
  },
  btn: {
    backgroundColor: Theme.primary,
    padding: Theme.hp('1.5%'),
    borderRadius: 50,
    marginTop: Theme.hp('2%'),
    marginBottom: 20,
  },
});

export default EditRegistration;
