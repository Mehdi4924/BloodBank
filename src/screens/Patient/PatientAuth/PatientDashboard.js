import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import {Card} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Images from '../../../constants/Images';
import Theme from '../../../utils/Theme';
const PatientDashboard = props => {
  const data = [
    {
      id: 0,
      image: Images.appoinment,
      date: 'Friday, March 5, 2021',
      status: 'Approved',
    },
    {
      id: 1,
      image: Images.appoinment,
      date: 'Saturday, March 5, 2022',
      status: 'Canceled',
    },
    {
      id: 2,
      image: Images.appoinment,
      date: 'Monday, March 8, 2021',
      status: 'Update',
    },
    {
      id: 3,
      image: Images.appoinment,
      date: 'Friday, March 5, 2021',
      status: 'Approved',
    },
    {
      id: 4,
      image: Images.appoinment,
      date: 'Tuesday, March 5, 2021',
      status: 'Canceled',
    },
    {
      id: 5,
      image: Images.appoinment,
      date: 'Wednenday, March 5, 2021',
      status: 'Update',
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainHeader}>
          <View style={styles.rowHeader}>
            <AntDesign name="menu" size={Theme.hp('3%')} color={Theme.white} />
            <Text
              style={{
                fontSize: Theme.hp('2.5%'),
                fontWeight: '700',
                color: Theme.white,
              }}>
              Patient Dashboard
            </Text>
            <Pressable
              onPress={() => props.navigation.navigate('EditRegistration')}>
              <Icon name="edit" size={Theme.hp('3%')} color={Theme.white} />
            </Pressable>
          </View>
          <View style={styles.rowView}>
            <Image source={Images.profile} style={styles.pro} />
            <View style={styles.patintView}>
              <Text style={styles.name}>Mubashar Ali</Text>
              <Text style={styles.patient}>
                Reg No: <Text>T-613</Text>
              </Text>
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.subValueView}>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Gender :</Text>
                <Text style={styles.value}>Male</Text>
              </View>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Mobile :</Text>
                <Text style={styles.value}>+92 3229441399</Text>
              </View>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Branch :</Text>
                <Text style={styles.value}>Lahore Branch</Text>
              </View>
            </View>

            <View style={[styles.subValueView, {width: Theme.wp('30%')}]}>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Age :</Text>
                <Text style={styles.value}>32</Text>
              </View>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Type :</Text>
                <Text style={styles.value}>Old Patient</Text>
              </View>
              <View style={styles.singleRow}>
                <Text style={styles.title}>Blood Group :</Text>
                <Text style={styles.value}> O+</Text>
              </View>
            </View>
          </View>
        </View>
        <Card style={styles.card} elevation={10}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.cardView}>
              <Text style={styles.header}>Transfusions</Text>
              <Text style={styles.numbers}>23</Text>
            </View>
            <View style={[styles.cardView, {borderRightWidth: 0}]}>
              <Text style={styles.header}> Visited</Text>
              <Text style={styles.numbers}>45</Text>
            </View>
          </View>
        </Card>
      </View>
      <FlatList
        data={data}
        ListFooterComponent={<View style={{marginTop: Theme.hp('3%')}}></View>}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              marginTop: Theme.hp('1%'),
              paddingHorizontal: Theme.hp('1%'),
            }}>
            <Card elevation={5} style={{padding: Theme.hp('2%')}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.listView}>
                  <Image source={item.image} style={{height: 30, width: 30}} />
                </View>
                <View style={{marginLeft: '4%'}}>
                  <Text
                    style={{
                      color: Theme.black,
                      fontSize: Theme.fontSmall,
                      fontWeight: 'bold',
                    }}>
                    {item.date}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: Theme.hp('1%'),
                    }}>
                    <Text style={{color: Theme.black}}>Status :</Text>
                    <Text
                      style={
                        item.status == 'Approved'
                          ? [styles.statuss, {color: Theme.green}]
                          : item.status == 'Canceled'
                          ? [styles.statuss, {color: 'red'}]
                          : item.status == 'Update'
                          ? [styles.statuss, {color: 'blue'}]
                          : styles.statuss
                      }>
                      {item.status}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeader: {
    backgroundColor: Theme.primary,
    width: '100%',
    paddingVertical: Theme.hp('2%'),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.wp('5%'),
  },
  pro: {
    borderRadius: 100,
    height: Theme.hp('10%'),
    width: Theme.hp('10%'),
  },
  rowView: {
    paddingHorizontal: Theme.wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('3%'),
  },
  patintView: {
    marginLeft: Theme.wp('6%'),
  },
  name: {
    color: Theme.white,
    fontSize: Theme.fontMedium,
  },
  title: {
    fontSize: Theme.hp('2%'),
    fontWeight: 'bold',
    color: Theme.white,
  },
  value: {
    fontSize: Theme.hp('1.6%'),
    color: Theme.white,
    marginLeft: Theme.wp('1%'),
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: Theme.hp('9%'),
    marginTop: Theme.hp('2%'),
  },
  card: {
    padding: Theme.hp('2%'),
    width: Theme.wp('78%'),
    zIndex: 1,
    marginTop: Theme.hp('-4.6%'),
    alignSelf: 'center',
  },
  subValueView: {width: Theme.wp('35%')},
  header: {
    color: Theme.primary,
    fontWeight: '700',
    textAlign: 'center',
  },
  cardView: {
    width: '50%',
    borderRightWidth: 0.5,
    borderRightColor: 'lightgrey',
  },
  numbers: {
    textAlign: 'center',
    fontWeight: '700',
    color: Theme.black,
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Theme.hp('1%'),
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  titlee: {
    color: Theme.grey,
    fontSize: 12,
    textAlign: 'center',
    marginTop: Theme.hp('1%'),
  },
  card1: {
    padding: Theme.hp('2%'),
    justifyContent: 'center',
    width: Theme.wp('28%'),
    alignItems: 'center',
  },
  cardStyle: {
    marginLeft: Theme.hp('1%'),
    marginTop: Theme.hp('2%'),
    flex: 1,
    marginRight: Theme.hp('1%'),
    justifyContent: 'space-between',
  },
  mainCard: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft: Theme.wp('6%'),
    marginTop: Theme.hp('3%'),
  },
  patient: {
    color: Theme.white,
    fontWeight: 'bold',
  },
  listView: {
    backgroundColor: 'rgba(255,135,135,0.4)',
    width: Theme.hp('8%'),
    borderRadius: 40,
    padding: Theme.hp('2%'),
  },
  statuss: {
    color: Theme.black,
    paddingLeft: Theme.wp('1%'),
    fontWeight: '700',
  },
});
export default PatientDashboard;
