import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Btn} from '../../components/Btn';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';

const CampRegistation = () => {
  const [modalVisible, setModalVisibl] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Card elevation={5} style={{padding: Theme.hp('2%')}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Theme.fontSmall,
              fontWeight: '700',
              color: Theme.primary,
            }}>
            Personal Information
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: Theme.hp('2%'),
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.titleText}>First Name</Text>
              <Text style={styles.text}>Mubashar Ali</Text>
              <Text style={styles.titleText}>Phone Number</Text>
              <Text style={styles.text}>+92 3229441399</Text>
              <Text style={styles.titleText}>Country</Text>
              <Text style={styles.text}>Pakistan</Text>
              <Text style={styles.titleText}>Address</Text>
              <Text style={styles.text}>Johar Town Lahore</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Email</Text>
              <Text style={styles.text}>example@gmail.com</Text>
              <Text style={styles.titleText}>Gender</Text>
              <Text style={styles.text}>Male</Text>
              <Text style={styles.titleText}>City</Text>
              <Text style={styles.text}>Lahore</Text>
              <Text style={styles.titleText}>Blood Group</Text>
              <Text style={styles.text}>O+</Text>
            </View>
          </View>
        </Card>
        <Card
          elevation={5}
          style={{padding: Theme.hp('2%'), marginTop: Theme.hp('1%')}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Theme.fontSmall,
              fontWeight: '700',
              color: Theme.primary,
            }}>
            Camp Information
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: Theme.hp('2%'),
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.titleText}>Camp Name</Text>
              <Text style={styles.text}>Thelesemia blood camp</Text>
              <Text style={styles.titleText}>To Date</Text>
              <Text style={styles.text}>12-02-2012</Text>
            </View>
            <View>
              <Text style={styles.titleText}>Camp Address</Text>
              <Text style={styles.text}>Faisal Colony Lahore </Text>
              <Text style={styles.titleText}>From Date</Text>
              <Text style={styles.text}>10-12-2021</Text>
            </View>
          </View>
          <Btn
            onPress={() => setModalVisibl(true)}
            text="Register"
            containerStyle={{
              backgroundColor: Theme.primary,
              paddingVertical: Theme.hp('1.3%'),
              marginTop: Theme.hp('2%'),
              borderRadius: 40,
            }}
            textStyle={{color: Theme.white}}
          />
        </Card>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisibl(!modalVisible);
        }}>
        <View style={[styles.centeredView, {justifyContent: 'center'}]}>
          <View style={styles.modalView}>
            <Image source={Images.success} style={styles.success} />
            <Text style={styles.requested}>
              Your are Successfully Registered in this Camp
            </Text>
            <TouchableOpacity onPress={() => setModalVisibl(false)}>
              <Image source={Images.next} style={styles.next} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.hp('1%'),
  },
  titleText: {
    color: Theme.black,
    marginTop: Theme.hp('0.5%'),
    fontWeight: 'bold',
  },
  text: {
    color: Theme.grey,
    marginTop: Theme.hp('0.5%'),
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(69,69,69,0.4)',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',

    elevation: 5,
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
    marginTop: Theme.hp('3%'),
    color: Theme.grey,
    textAlign: 'center',
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

export default CampRegistation;
