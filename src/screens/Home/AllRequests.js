import React, {useState} from 'react';
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
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Btn} from '../../components/Btn';
import AddRequestComponent from '../../components/RequestsComponent';

const AllRequests = props => {
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
      image: Images.drop,
      name: 'Amir Hamza',
      location: 'Services Hospital',
      time: '5 Min Ago',
      group: 'B+',
    },
    {
      id: 1,
      image: Images.drop,
      name: 'Ali Ahmed',
      time: '9 Min Ago',
      location: 'Hameed Latif',
      group: 'A+',
    },
    {
      id: 2,
      image: Images.drop,
      name: 'Sultan Ahmed',
      location: 'General Hospital',
      time: '2 Min Ago',
      group: 'B-',
    },
    {
      id: 3,
      image: Images.drop,
      name: 'Asif Iqbal',
      location: 'Sir Ganga Ram ',
      time: '10 Min Ago',
      group: 'O+',
    },
    {
      id: 4,
      image: Images.drop,
      name: 'Rasheed ',
      location: 'Itfaq Hospital',
      time: '15 Min Ago',
      group: 'AB+',
    },
    {
      id: 5,
      image: Images.drop,
      name: 'Amir',
      location: 'Punjab Cardiology',
      time: '20 Min Ago',
      group: 'O-',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          text="All Requests"
          onBackPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.searchView}>
        <Card style={{padding: Theme.wp('2%'), width: Theme.wp('83%')}}>
          <TextInput
            style={styles.input}
            placeholder="Search acceptor"
            placeholderTextColor={Theme.grey}
          />
        </Card>
        <TouchableOpacity onPress={() => setFilterModal(true)}>
          <Image source={Images.filter} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      </View>
      {data == '' ? (
        <Text
          style={{
            color: Theme.black,
            textAlign: 'center',
            marginTop: Theme.hp('5%'),
          }}>
          no record found
        </Text>
      ) : (
        <View style={{marginBottom: Theme.hp('20%')}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            numColumns={1}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <AddRequestComponent
                image={item.image}
                name={item.name}
                location={item.location}
                group={item.group}
                time={item.time}
                doneteNow={() => props.navigation.navigate('Assistant')}
              />
            )}
          />
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
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
              <Text style={styles.pinText}>Mirpur Khas, Dhaka</Text>
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
                <Text style={styles.donate}>Blood Type - AB+</Text>
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
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></MapView>
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={filterModal}>
        <View style={styles.filetrModalView}>
          <View style={styles.modalViewFilter}>
            <TouchableOpacity
              onPress={() => setFilterModal(false)}
              style={{alignSelf: 'flex-end', top: Theme.hp('2%')}}
              // style={{position: 'absolute', right: 20, top: 10}}
              color={Theme.black}>
              <AntDesign
                name="close"
                color={Theme.black}
                size={Theme.hp('3%')}
              />
            </TouchableOpacity>

            <Text style={styles.filterText}>Filters</Text>
            <Card elevation={5} style={{marginTop: Theme.hp('3%')}}>
              <TouchableOpacity
                onPress={() =>
                  setFilterType(filterType == 'bloodtype' ? '' : 'bloodtype')
                }
                style={styles.cardBack}>
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
                style={styles.cardBack}
                onPress={() =>
                  setFilterType(filterType == 'location' ? '' : 'location')
                }>
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
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
                style={styles.cardBack}
                onPress={() =>
                  setFilterType(filterType == 'bloodbank' ? '' : 'bloodbank')
                }>
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
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
                style={styles.cardBack}
                onPress={() =>
                  setFilterType(filterType == 'donors' ? '' : 'donors')
                }>
                <Text style={{color: Theme.black, fontWeight: 'bold'}}>
                  Donors
                </Text>
                <AntDesign
                  name={filterType == 'donors' ? 'down' : 'right'}
                  color={Theme.black}
                  size={Theme.hp('2%')}
                />
              </TouchableOpacity>
              {filterType == 'donors' && (
                <View style={{marginBottom: Theme.hp('2%')}}></View>
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
    // alignItems: 'center',
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
    // marginTop: Theme.hp('2%'),
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

export default AllRequests;
