import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native';
import {Card} from 'react-native-paper';
import Header from '../../components/Header';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Btn} from '../../components/Btn';
import Geolocation from 'react-native-geolocation-service';

const Search = props => {
  const openNumber = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${(042)35958849}';
    } else {
      number = 'tel:${(042)35958849}';
    }
    Linking.openURL(number);
  };
  const [modalVisible, setModalVisibl] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [filterType, setFilterType] = useState(false);
  const [group, setGroup] = useState('B+');
  const [lat, setlat] = useState(0);
  const [lng, setlng] = useState(0);
  const BloodGroups = [
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
  const data = [
    {
      id: 0,
      image: require('../../assets/images/pic1.jpg'),
      name: 'Mubashar Ali',
      location: 'Thokar Lahore',
      group: 'O+',
      lastDate: ' Last date of donation 23 Jun 2018',
    },
    {
      id: 1,
      name: 'Iftakhar Ahmed',
      image: require('../../assets/images/pic2.jpg'),
      location: 'Near Janah Hospital',
      group: 'A+',
    },
    {
      id: 2,
      name: 'Hassan Ali',
      location: 'MM Alam Road',
      group: 'B-',
      image: require('../../assets/images/pic1.jpg'),
      lastDate: ' Last date of donation 23 Jun 2018',
    },
    {
      id: 3,
      name: 'Atif Ali',
      location: 'Janah Terminal',
      group: 'AB+',
      image: require('../../assets/images/pic2.jpg'),
      lastDate: ' Last date of donation 23 Jun 2018',
    },
    {
      id: 4,
      name: 'Sohaib Ahmed',
      image: require('../../assets/images/pic1.jpg'),
      location: 'Johar Town',
      group: 'B-',
    },
    {
      id: 5,
      name: 'Usman',
      location: 'Allam Iqbal Town',
      image: require('../../assets/images/pic2.jpg'),
      group: 'O+',
      lastDate: ' Last date of donation 23 Jun 2018',
    },

    {
      id: 6,
      name: 'Numan Babar',
      location: 'Pak Arab Society',
      lastDate: ' Last date of donation 23 Jun 2018',
      image: require('../../assets/images/pic1.jpg'),

      group: 'B+',
    },

    {
      id: 7,
      name: 'Ahmed ',
      location: 'Dengue Pura',
      group: 'B-',
      image: require('../../assets/images/pic2.jpg'),
    },
    {
      id: 8,
      name: 'Zain Ahmed',
      location: 'Canal Berg',
      group: 'O+',
      image: require('../../assets/images/pic1.jpg'),
      lastDate: ' Last date of donation 23 Jun 2018',
    },

    {
      id: 9,
      name: 'Ishtiaq',
      location: 'THokar Lahore',
      group: 'B+',
      image: require('../../assets/images/pic2.jpg'),
      lastDate: ' Last date of donation 23 Jun 2018',
    },
  ];
  const mapView = () => {
    console.log('adsfds');
    Geolocation.getCurrentPosition(position => {
      console.log('sdaf');
      console.log(position);
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log('===>', lng);
      setlat(lat);
      setlng(lng);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          text="Find Donors"
          onBackPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.searchView}>
        <Card style={{padding: Theme.wp('2%'), width: Theme.wp('83%')}}>
          <TextInput
            style={styles.input}
            placeholder="Search donor"
            placeholderTextColor={Theme.grey}
          />
        </Card>
        <TouchableOpacity onPress={() => setFilterModal(true)}>
          <Image source={Images.filter} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          refreshing={true}
          data={data}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          ListFooterComponent={
            <View style={{marginTop: Theme.hp('26%')}}></View>
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card style={styles.carMainView}>
              <TouchableOpacity
                style={styles.card2}
                onPress={() => {
                  setModalVisibl(true), mapView();
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={item.image} style={styles.proImage} />

                  <View style={{marginLeft: Theme.wp('5%')}}>
                    <Text
                      style={{color: Theme.black, fontSize: Theme.fontSmall}}>
                      {item.name}
                    </Text>
                    <View style={styles.proView}>
                      <Image source={Images.pin} style={styles.pin} />
                      <Text style={styles.pinText}>{item.location}</Text>
                    </View>
                    {item.lastDate && (
                      <Text style={styles.lastDate}>{item.lastDate}</Text>
                    )}
                  </View>
                </View>
                <ImageBackground source={Images.drop} style={styles.drop}>
                  <Text style={styles.groupText}>{item.group}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </Card>
          )}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibl(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={Images.profile} style={styles.success} />
            <TouchableOpacity
              onPress={() => setModalVisibl(false)}
              style={styles.closeView}>
              <AntDesign name="close" color={Theme.black} size={20} />
            </TouchableOpacity>
            <Text style={styles.requested}>Mubashar Ali</Text>
            <View style={styles.proView}>
              <Image source={Images.pin} style={styles.pin} />
              <Text style={styles.pinText}>Johar Town, Lahore</Text>
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
            <View style={{flexDirection: 'row', marginTop: Theme.hp('2%')}}>
              <TouchableOpacity style={styles.btn} onPress={() => openNumber()}>
                <Image
                  source={Images.callnow}
                  style={{height: 26, width: 26}}
                />
                <Text style={styles.btnText}>Call Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibl(false), props.navigation.navigate('Assistant');
                }}
                style={[
                  styles.btn,
                  {backgroundColor: Theme.primary, marginLeft: Theme.wp('10%')},
                ]}>
                <Image source={Images.share} style={{height: 22, width: 26}} />
                <Text style={styles.btnText}>Request</Text>
              </TouchableOpacity>
            </View>
            <View>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: lat,
                  longitude: lng,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  pinColor={Theme.primary}
                  coordinate={{latitude: lat, longitude: lng}}
                />
              </MapView>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModal}
        onRequestClose={() => {
          setFilterModal(!filterModal);
        }}>
        <View style={styles.filetrModalView}>
          <View style={styles.modalViewFilter}>
            <TouchableOpacity
              onPress={() => setFilterModal(false)}
              style={{alignSelf: 'flex-end', top: 10}}>
              <AntDesign
                name="close"
                size={Theme.hp('3%')}
                color={Theme.black}
              />
            </TouchableOpacity>

            <Text style={styles.filterText}>Filters</Text>
            <Card elevation={5} style={{marginTop: Theme.hp('3%')}}>
              <TouchableOpacity
                style={styles.cardBack}
                onPress={() =>
                  setFilterType(filterType == 'bloodtype' ? '' : 'bloodtype')
                }s>
                <Text style={{color: Theme.black, fontWeight: 'bold'}}>
                  Blood Type
                </Text>
                <AntDesign
                  name={filterType == 'bloodtype' ? 'down' : 'right'}
                  color={Theme.black}
                  size={Theme.hp('2%')}
                />
              </TouchableOpacity>
              {filterType == 'bloodtype' && (
                <View style={{marginBottom: Theme.hp('2%')}}>
                  <FlatList
                    bounces={false}
                    data={BloodGroups}
                    showsHorizontalScrollIndicator={false}
                    numColumns={5}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={
                          group == item.name
                            ? [
                                styles.cardStyle,
                                {
                                  backgroundColor: Theme.primary,
                                  borderWidth: 0,
                                },
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
              )}
            </Card>
            <Card elevation={5} style={{marginTop: Theme.hp('1%')}}>
              <TouchableOpacity
                onPress={() =>
                  setFilterType(filterType == 'location' ? '' : 'location')
                }
                style={styles.cardBack}>
                <Text style={{color: Theme.black, fontWeight: 'bold'}}>
                  Location
                </Text>
                <AntDesign
                  name={filterType == 'location' ? 'down' : 'right'}
                  color={Theme.black}
                  size={Theme.hp('2%')}
                />
              </TouchableOpacity>
              {filterType == 'location' && (
                <View style={{marginBottom: Theme.hp('2%')}}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map1}
                    region={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}></MapView>
                </View>
              )}
            </Card>
            <Card elevation={5} style={{marginTop: Theme.hp('1%')}}>
              <TouchableOpacity
                onPress={() =>
                  setFilterType(filterType == 'bloodbank' ? '' : 'bloodbank')
                }
                style={styles.cardBack}>
                <Text style={{color: Theme.black, fontWeight: 'bold'}}>
                  Blood Bank
                </Text>
                <AntDesign
                  name={filterType == 'bloodbank' ? 'down' : 'right'}
                  color={Theme.black}
                  size={Theme.hp('2%')}
                />
              </TouchableOpacity>
              {filterType == 'bloodbank' && (
                <View style={{marginBottom: Theme.hp('2%')}}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map1}
                    region={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}></MapView>
                </View>
              )}
            </Card>

            <Btn
              onPress={() => setFilterModal(false)}
              text="Apply"
              containerStyle={{
                backgroundColor: Theme.primary,
                padding: Theme.hp('2%'),
                borderRadius: 4,
                bottom: 20,
                width: Theme.wp('90%'),
                alignSelf: 'center',
                position: 'absolute',
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  headerContainer: {
    backgroundColor: Theme.lightWhite,
    padding: Theme.wp('5%'),
    elevation: 5,
  },

  searchView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: Theme.wp('78%'),
    height: Theme.hp('5%'),
    color: Theme.grey,
  },
  proImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  card2: {
    padding: Theme.hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carMainView: {
    marginTop: Theme.hp('1%'),
  },
  drop: {
    marginRight: Theme.wp('3%'),
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
  },
  proView: {
    flexDirection: 'row',
    marginTop: Theme.hp('0.5%'),
    alignItems: 'center',
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
  groupView: {
    height: 50,
    width: 50,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.grey,
    borderRadius: 100,
  },
  endView: {
    backgroundColor: Theme.primary,
    padding: 10,
  },
  lastDate: {
    color: Theme.primary,
    fontSize: 11,
    marginTop: Theme.hp('0.4%'),
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(115, 115, 115,0.4)',
  },
  filetrModalView: {
    flex: 1,
    backgroundColor: 'rgba(115, 115, 115,0.4)',
  },
  modalView: {
    paddingBottom: Theme.hp('4%'),
    width: '100%',
    marginTop: Theme.hp('15%'),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalViewFilter: {
    paddingBottom: Theme.hp('4%'),
    width: '100%',
    height: '85%',
    marginTop: Theme.hp('15%'),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: Theme.wp('5%'),
    elevation: 5,
  },
  success: {
    borderColor: Theme.lightWhite,
    borderWidth: 5,
    borderRadius: 60,
    marginTop: Theme.hp('-5%'),
    height: 100,
    width: 100,
  },
  requested: {
    fontSize: Theme.fontMedium,
    color: Theme.black,
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
  map: {
    marginTop: Theme.hp('2%'),
    height: Theme.hp('45%'),
    width: Theme.wp('90%'),
  },
  map1: {
    marginTop: Theme.hp('1%'),
    height: Theme.hp('35%'),
    width: Theme.wp('83%'),
    alignSelf: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Theme.hp('2%'),
  },
  closeView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
  donate: {color: Theme.black, marginTop: Theme.hp('1%')},
  filterText: {
    color: Theme.black,
    fontSize: Theme.fontMedium,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Theme.hp('2%'),
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
  select: {
    color: Theme.grey,
    paddingLeft: Theme.wp('4%'),
  },
});

export default Search;
