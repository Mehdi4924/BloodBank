import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Theme from '../utils/Theme';
import {Card} from 'react-native-paper';

const AddRequestComponent = ({
  name,
  location,
  time,
  group,
  doneteNow,
  image,
}) => {
  return (
    <View style={[styles.cardStyle, {marginTop: Theme.hp('0.5%')}]}>
      <Card style={styles.card2}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.name}>Location</Text>
            <Text style={styles.nameText}>{location}</Text>
            <Text style={styles.name}>{time}</Text>
          </View>
          <View>
            <ImageBackground source={image} style={styles.drop}>
              <Text style={styles.group}>{group}</Text>
            </ImageBackground>
            <TouchableOpacity onPress={doneteNow}>
              <Text style={styles.donate}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
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

export default AddRequestComponent;
