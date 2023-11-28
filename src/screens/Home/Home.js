import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Alert,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import Theme from '../../utils/Theme';
import {SliderBox} from 'react-native-image-slider-box';
import Images from '../../constants/Images';
import {Card} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/core';
import AddRequestComponent from '../../components/RequestsComponent';

const Home = props => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = async () => {
        Alert.alert('Logout', 'Do you really want to exit the application?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const data = [
    {
      id: 0,
      image: Images.donor,
      title: 'Find Donor',
      navigation: 'Search',
    },
    {
      id: 1,
      image: Images.don,
      title: 'Cash Donation',
      navigation: 'CashDonation',
    },
    {
      id: 2,
      image: Images.orderBlood,
      title: 'Request Blood',
      navigation: 'OrderBlood',
    },
    {
      id: 3,
      image: Images.compaign,
      title: 'Compaign',
      navigation: 'Compaign',
    },
    {
      id: 4,
      image: Images.assistant,
      title: 'Assistant',
      navigation: 'Assistant',
    },
    {
      id: 5,
      image: Images.report,
      title: 'Reports',
      navigation: 'Reports',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.redContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Gallery')}>
              <Image source={Images.left} style={styles.left} />
            </TouchableOpacity>
            <Text style={styles.das}>Dashboard</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Notifications')}>
              <Image source={Images.right} style={styles.right} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              ListHeaderComponent={<HeaderComponent />}
              ListFooterComponent={
                <FooterComponent
                  donetNow={() => props.navigation.navigate('Assistant')}
                  onPress={() => props.navigation.navigate('AllRequests')}
                />
              }
              data={data}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View
                  style={
                    item.id == 0 || item.id == 3
                      ? styles.mainCard
                      : [styles.mainCard, {marginLeft: Theme.wp('2%')}]
                  }>
                  <Card elevation={5} style={styles.card}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate(item.navigation)
                      }>
                      <Image source={item.image} style={styles.image} />
                      <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const HeaderComponent = () => {
  const images = [Images.b1, Images.b2, Images.b4, Images.b5, Images.b6];

  return (
    <View>
      <View style={{marginVertical: 0}}>
        <SliderBox
          images={images}
          sliderBoxHeight={120}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={Theme.primary}
          inactiveDotColor={Theme.black}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'stretch'}
          paginationBoxStyle={styles.paginationBoxStyle}
          dotStyle={styles.dot}
          ImageComponentStyle={{
            borderRadius: 15,
            width: '90%',
            marginTop: 5,
          }}
          imageLoadingColor={Theme.primary}
        />
      </View>
    </View>
  );
};

const FooterComponent = ({onPress, donetNow}) => {
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
    <View style={{marginBottom: Theme.hp('7%')}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.req}>Donation Requests</Text>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={
              ([styles.req],
              {
                color: Theme.primary,
                marginRight: Theme.wp('7%'),
                fontWeight: 'bold',
              })
            }>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      {data == null ? (
        <Text>no record found</Text>
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
                doneteNow={donetNow}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Theme.black,
  },
  left: {
    height: 25,
    width: 25,
  },
  rowContainer: {
    backgroundColor: Theme.lightWhite,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    height: 27.73,
    width: 26.63,
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    color: Theme.grey,
    fontSize: 12,
    textAlign: 'center',
    marginTop: Theme.hp('1%'),
  },
  card: {
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
    marginBottom: Theme.hp('1%'),
  },

  drop: {
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Theme.wp('4%'),
    width: 40,
  },
  card2: {
    padding: Theme.hp('2%'),
  },
  name: {
    color: Theme.grey,
    fontSize: 14,
  },
  nameText: {
    color: Theme.fontColor,
  },
  req: {
    fontSize: Theme.fontMedium,
    color: Theme.fontColor,
    marginVertical: Theme.hp('2%'),
    marginHorizontal: Theme.wp('3%'),
  },
  group: {
    color: Theme.white,
    fontSize: Theme.fontMedium,
    marginTop: Theme.hp('1%'),
  },
  donate: {
    color: Theme.primary,
    fontSize: Theme.fontSmall,
    marginTop: Theme.hp('2%'),
  },
  das: {
    color: Theme.fontColor,
    fontSize: Theme.fontMedium,
    fontWeight: 'bold',
    color: Theme.primary,
  },
  mainCard: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft: Theme.wp('6%'),
    marginTop: Theme.hp('1%'),
  },
});

export default Home;
