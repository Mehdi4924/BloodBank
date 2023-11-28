import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Assistant = () => {
  const data = [
    {
      id: 0,
      text: 'Hallo',
      mine: 'mine',
    },
    {
      id: 1,
      text: 'Hallo',
      mine: 'not mine',
    },
    {
      id: 2,
      text: ' Haloo MubasharHaloo  MubasharHaloo Mubashar',
      mine: 'mine',
    },
    {
      id: 2,
      text: 'How are You?Haloo MubasharHaloo  Mubashar',
      mine: 'not mine',
    },
    {
      id: 2,
      text: 'I am Fine',
      mine: 'mine',
    },
  ];
  // const [data,setData]=useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Image source={Images.profile} style={styles.img} />
        <View style={{marginLeft: Theme.wp('3%')}}>
          <Text style={styles.title}>Micheal Joshua</Text>
          <Text style={styles.online}>Online Now</Text>
        </View>
      </View>
      <View>
        <FlatList
          bounces={false}
          data={data}
          showsHorizontalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              {item.mine == 'mine' ? (
                <View
                  style={{
                    backgroundColor: 'red',
                    maxWidth: Theme.wp('70%'),
                    alignSelf: 'flex-end',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 50,
                    margin: 5,
                    borderBottomEndRadius: 0,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      marginStart: Theme.wp('2%'),
                      color: Theme.white,
                    }}>
                    {item.text}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: 'lightgrey',
                    maxWidth: Theme.wp('70%'),
                    alignSelf: 'flex-start',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 50,
                    margin: 5,
                    borderBottomLeftRadius: 0,
                  }}>
                  <Text
                    style={{
                      color: Theme.black,
                      fontSize: 16,
                      marginStart: Theme.wp('2%'),
                    }}>
                    {item.text}
                  </Text>
                </View>
              )}
            </View>
          )}
        />
      </View>
      <View style={styles.sendBack}>
        <TextInput
          placeholderTextColor={Theme.white}
          placeholder="Message"
          style={{flex: 1, color: Theme.white, paddingStart: Theme.wp('5%')}}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="send-circle"
            size={45}
            color={Theme.white}
            style={{marginRight: Theme.wp('4%')}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  img: {
    height: 50,
    width: 50,
  },
  back: {
    padding: Theme.hp('2%'),
    backgroundColor: Theme.lightWhite,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: Theme.black,
    fontSize: Theme.fontSmall,
    fontWeight: 'bold',
  },
  online: {
    color: Theme.grey,
  },
  sendBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.primary,
    padding: 5,
    // borderTopLeftRadius:8,borderTopRightRadius:8,
    position: 'absolute',
    bottom: 0,
    width: Theme.wp('100%'),
  },
});

export default Assistant;
