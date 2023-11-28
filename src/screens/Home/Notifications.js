import React, {useState} from 'react';
import Swipeable from 'react-native-swipeable';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Theme from '../../utils/Theme';
import {Card} from 'react-native-paper';

const Notifications = () => {
  const [currentlyOpenSwipeable, setcurrentlyOpenSwipeable] = useState(null);

  const data = [
    {
      id: 0,
      image: require('../../assets/images/pic1.jpg'),
      desc: 'Ahmed Afaq posted a new blood request for blood group 0+',
      time: '3 min ago',
    },
    {
      id: 2,
      image: require('../../assets/images/pic2.jpg'),
      name: 'Mubashar Ali',
      desc: 'Hashir donate blood B+ to Hafiz Ali Ahmed at Bahria Hospital',
      time: '5 min ago',
    },
    {
      id: 3,
      image: require('../../assets/images/pic1.jpg'),
      name: 'Mubashar Ali',
      desc: 'You have successfully donate your blood at Services hospital ',

      time: '7 min ago',
    },
    {
      id: 4,
      image: require('../../assets/images/pic2.jpg'),
      name: 'Mubashar Ali',
      desc: 'Hassan say thanks to you for donation your blood in Janah Hospital',
      time: '3 min ago',
    },
    {
      id: 5,
      image: require('../../assets/images/pic1.jpg'),
      desc: 'Ahmed Afaq posted a new blood request for blood group 0+',
      time: '3 min ago',
    },
    {
      id: 6,
      image: require('../../assets/images/pic2.jpg'),
      name: 'Mubashar Ali',
      desc: 'Hashir donate blood B+ to Hafiz Ali Ahmed at Bahria Hospital',
      time: '5 min ago',
    },
    {
      id: 7,
      image: require('../../assets/images/pic1.jpg'),
      name: 'Mubashar Ali',
      desc: 'You have successfully donate your blood at Services hospital ',

      time: '7 min ago',
    },
    {
      id: 8,
      image: require('../../assets/images/pic2.jpg'),
      name: 'Mubashar Ali',
      desc: 'Hassan say thanks to you for donation your blood in Janah Hospital',
      time: '3 min ago',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Swipeable
            rightButtons={[
              <TouchableOpacity
                style={[styles.rightSwipeItem, {backgroundColor: 'red'}]}>
                <Text>Delete</Text>
              </TouchableOpacity>,
            ]}>
            <Card style={styles.carMainView}>
              <TouchableOpacity style={styles.card2}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image source={item.image} style={styles.proImage} />

                  <View
                    style={{
                      marginLeft: Theme.wp('5%'),
                      width: '70%',
                    }}>
                    <Text
                      style={{
                        color: Theme.black,
                        fontSize: Theme.hp('1.7%'),
                      }}>
                      {item.desc}
                    </Text>
                    <Text
                      style={{
                        color: Theme.grey,
                        fontSize: Theme.hp('1.4%'),
                      }}>
                      {item.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 10,
                      borderRadius: 30,
                      width: 10,
                      marginTop: Theme.hp('3%'),
                      marginLeft: Theme.wp('4%'),
                      backgroundColor: 'lightblue',
                    }}></View>
                </View>
              </TouchableOpacity>
            </Card>
          </Swipeable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  card2: {
    padding: Theme.hp('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  carMainView: {
    marginTop: Theme.hp('0.1%'),
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
  proImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default Notifications;
