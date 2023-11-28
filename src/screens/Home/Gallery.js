//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Images from '../../constants/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../utils/Theme';

// create a component
const Gallery = () => {
  const [modalVisible, setModalVisibl] = useState(false);
  const [image, setImage] = useState('');
  const data = [
    {
      id: 0,
      image: Images.b1,
    },
    {
      id: 1,
      image: Images.b2,
    },
    {
      id: 2,
      image: Images.b3,
    },
    {
      id: 3,
      image: Images.b4,
    },
    {
      id: 4,
      image: Images.b5,
    },
    {
      id: 5,
      image: Images.b6,
    },
    {
      id: 6,
      image: Images.b1,
    },
    {
      id: 7,
      image: Images.b2,
    },
    {
      id: 8,
      image: Images.b3,
    },
    {
      id: 9,
      image: Images.b4,
    },
    {
      id: 10,
      image: Images.b5,
    },
    {
      id: 11,
      image: Images.b6,
    },
    {
      id: 77824,
      image: Images.b1,
    },
    {
      id: 1423,
      image: Images.b2,
    },
    {
      id: 2324,
      image: Images.b3,
    },
    {
      id: 3234,
      image: Images.b4,
    },
    {
      id: 4234,
      image: Images.b5,
    },
    {
      id: 5243,
      image: Images.b6,
    },
    {
      id: 62334,
      image: Images.b1,
    },
    {
      id: 7234,
      image: Images.b2,
    },
    {
      id: 8324,
      image: Images.b3,
    },
    {
      id: 92342,
      image: Images.b4,
    },
    {
      id: 1042323,
      image: Images.b5,
    },
    {
      id: 11423,
      image: Images.b6,
    },
    {
      id: 1223,
      image: Images.b1,
    },
    {
      id: 3213,
      image: Images.b2,
    },
    {
      id: 2332,
      image: Images.b3,
    },
    {
      id: 334432,
      image: Images.b4,
    },
    {
      id: 4454,
      image: Images.b5,
    },
    {
      id: 5432,
      image: Images.b6,
    },
    {
      id: 6432,
      image: Images.b1,
    },
    {
      id: 7342,
      image: Images.b2,
    },
    {
      id: 2348,
      image: Images.b3,
    },
    {
      id: 9423,
      image: Images.b4,
    },
    {
      id: 1023423,
      image: Images.b5,
    },
    {
      id: 1144,
      image: Images.b6,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              flex: 1,
              marginTop: Theme.hp('0.5%'),
            }}>
            <TouchableOpacity
              onPress={() => {
                setImage(item.image), setModalVisibl(true);
              }}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibl(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Pressable
            style={{position: 'absolute', right: 20, top: 20}}
            onPress={() => setModalVisibl(false)}>
            <AntDesign
              name="close"
              color={Theme.lightWhite}
              size={Theme.hp('4%')}
            />
          </Pressable>

          <View style={styles.modalView}>
            <Image
              source={image}
              style={{height: Theme.hp('40%'), width: Theme.wp('100%')}}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.hp('1%'),
  },
  image: {
    height: Theme.hp('13%'),
    width: Theme.hp('14%'),

    // marginLeft: Theme.wp('1%'),
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(69,69,69,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 20,
    // backgroundColor: 'rgba(69,69,69,0.9)',
    borderRadius: 20,
    padding: 25,
    height: Theme.hp('50%'),

    elevation: 5,
  },
});

//make this component available to the app
export default Gallery;
