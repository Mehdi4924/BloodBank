import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import Theme from '../../utils/Theme';
import RPCountryPickerInfo from 'react-native-country-picker-info';
import DropDownPicker from 'react-native-dropdown-picker';
import FormInput from '../../components/Text_input';
import {Btn} from '../../components/Btn';
import Images from '../../constants/Images';
import Header from '../../components/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RadioButton} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AddRequest = props => {
  const picker = useRef('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [group, setGroup] = useState('B+');
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');

  const [items, setItems] = useState([
    {label: 'Friend', value: 'friend'},
    {label: 'Reletive', value: 'reletive'},
    {label: 'neighbour', value: 'neighbour'},
    {label: 'Own House', value: 'Own House'},
    {label: 'Own', value: 'Own'},
  ]);
  const [isOpenCountryPicker, setIsOpenCountryPicker] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState('Select Country');
  const [modalVisible, setModalVisibl] = useState(false);

  const onPressOpenPicker = () => {
    setIsOpenCountryPicker(!isOpenCountryPicker);
  };

  const onPressCountryItem = countryInfo => {
    setCountryCode(countryInfo.name);
    setIsOpenCountryPicker(false);
  };
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
  const subm = async () => {
    setModalVisibl(true);
  };
  const [checked, setChecked] = React.useState('Emergency');
  const [datee, setDate] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const dat = new Date(date);
    const fromt =
      dat.getFullYear() + '-' + (dat.getMonth() + 1) + '-' + dat.getDate();
    setDate(fromt);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Header
          text="Request For Blood"
          onBackPress={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Blood For</Text>

          <DropDownPicker
            dropDownContainerStyle={{borderWidth: 0}}
            style={{
              borderWidth: 0,
              backgroundColor: Theme.inputBack,
              borderRadius: 40,

              marginTop: Theme.hp('1%'),
            }}
            labelStyle={{color: Theme.grey}}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
          <Text style={[styles.label, {marginTop: Theme.hp('1%')}]}>
            Country Preference
          </Text>

          <TouchableOpacity
            onPress={onPressOpenPicker}
            style={[
              styles.back,
              {marginTop: Theme.hp('1%'), justifyContent: 'space-between'},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.country}>{countryCode}</Text>
            </View>
          </TouchableOpacity>

          <RPCountryPickerInfo
            isVisible={isOpenCountryPicker}
            isVisibleCancelButton={false}
            onPressClosePicker={onPressOpenPicker}
            onPressSelect={onPressCountryItem}
          />
          <Text style={[styles.label, {marginTop: Theme.hp('1%')}]}>
            City Name
          </Text>
          <FormInput
            onChangeText={city => setCity(city)}
            containerStyle={[styles.back, {justifyContent: 'flex-start'}]}
            text_input_container={styles.text_input_container}
            text={{borderBottomWidth: 0}}
            placeholder="Enter Name.."
          />
          <Text style={[styles.label, {marginTop: Theme.hp('1%')}]}>
            Hospital Name
          </Text>
          <FormInput
            onChangeText={hospital => setHospital(hospital)}
            containerStyle={[styles.back, {justifyContent: 'flex-start'}]}
            text_input_container={styles.text_input_container}
            text={{borderBottomWidth: 0}}
            placeholder="Enter Name.."
          />
          <View style={styles.radio}>
            <View style={styles.radio}>
              <RadioButton
                color={Theme.primary}
                value="Emergency"
                uncheckedColor={Theme.primary}
                status={checked === 'Emergency' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Emergency')}
              />
              <Text style={styles.radioText}>Emergency</Text>
            </View>
            <View style={[styles.radio, {marginLeft: Theme.wp('4%')}]}>
              <RadioButton
                color={Theme.primary}
                uncheckedColor={Theme.primary}
                value="Select Date"
                status={checked === 'Select Date' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Select Date')}
              />
              <Text style={styles.radioText}>Select Date</Text>
            </View>
          </View>
          {checked == 'Select Date' ? (
            <View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={[styles.back, {justifyContent: 'flex-start'}]}>
                <Fontisto
                  name="date"
                  color={Theme.primary}
                  size={21}
                  style={{marginLeft: Theme.wp('5%')}}
                />
                <Text
                  style={{
                    fontSize: Theme.fontSmall,
                    marginLeft: Theme.wp('4%'),
                    color: Theme.grey,
                  }}>
                  {datee == '' ? 'Select Date' : datee}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={[styles.label, {marginTop: Theme.hp('1%')}]}>
            Select Blood Group
          </Text>
          <View style={{marginTop: Theme.hp('1%')}}>
            <FlatList
              bounces={false}
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
          <Btn
            onPress={() => subm()}
            text="Request Submit"
            containerStyle={{
              backgroundColor: Theme.primary,
              padding: 10,
              marginTop: Theme.hp('4%'),
              borderRadius: 40,
              marginBottom: Theme.hp('7%'),
            }}
            textStyle={{fontSize: Theme.fontSmall}}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image source={Images.pana} style={styles.success} />
              <Text style={styles.requested}>
                Blood is successfully requested.
              </Text>
              <TouchableOpacity
                onPress={() => (
                  setModalVisibl(false), props.navigation.navigate('Home')
                )}>
                <Image source={Images.next} style={styles.next} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.wp('5%'),
    flex: 1,
    backgroundColor: Theme.white,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    color: Theme.black,
  },
  back: {
    backgroundColor: Theme.inputBack,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'space-between',
    height: Theme.hp('7%'),
    marginVertical: 5,
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
  country: {
    marginLeft: Theme.wp('4%'),
    color: Theme.grey,
  },
  label: {
    fontSize: Theme.fontSmall,
    color: Theme.black,
    marginLeft: Theme.wp('3%'),
    marginTop: Theme.hp('1%'),
  },

  text_input_container: {
    width: Theme.wp('80%'),
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(115, 115, 115,0.7)',
    justifyContent: 'center',
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
    height: 200,
    width: 200,
  },
  requested: {
    marginTop: Theme.hp('3%'),
    color: Theme.grey,
  },
  next: {
    height: 45,
    width: 45,
    marginTop: Theme.hp('2%'),
  },
  headerContainer: {
    backgroundColor: Theme.lightWhite,
    padding: Theme.wp('5%'),
    elevation: 5,
  },
});

export default AddRequest;
