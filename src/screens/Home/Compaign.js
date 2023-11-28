import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../constants/Images';
import Theme from '../../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Btn} from '../../components/Btn';

const Compaign = props => {
  const [modalVisible, setModalVisibl] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');

  const data = [
    {
      id: 1,
      image: Images.camp1,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',
      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 2,
      image: Images.camp2,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 3,
      image: Images.camp3,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 4,
      image: Images.camp4,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 5,
      image: Images.camp5,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 6,
      image: Images.camp3,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 7,
      image: Images.camp4,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',

      location: 'Faislabad Airport near Jail Road',
    },
    {
      id: 8,
      image: Images.camp5,
      title: 'Blood Donation Compaign',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whichIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn',
      location: 'Faislabad Airport near Jail Road',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        bounces={false}
        data={data}
        ListFooterComponent={<View style={{marginTop: Theme.hp('5%')}}></View>}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setModalVisibl(true),
                setImage(item.image),
                setLoc(item.location),
                setTitle(item.title),
                setDesc(item.desc);
            }}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisibl(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setModalVisibl(false)}
              style={styles.closeView}>
              <AntDesign name="close" color={Theme.black} size={20} />
            </TouchableOpacity>
            <Image
              source={image}
              style={[
                styles.image,
                {marginTop: Theme.hp('2%'), height: Theme.hp('25%')},
              ]}
              resizeMode="contain"
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.desc, {marginTop: Theme.hp('1%')}]}>
              {loc}
            </Text>
            <Text style={{fontSize: Theme.hp('1.6%'), color: Theme.grey}}>
              3 January 2022
            </Text>

            <Text style={styles.desc}>{desc}</Text>
            <Btn
              text="Registration"
              onPress={() => {
                props.navigation.navigate('CampRegistration'),
                  setModalVisibl(false);
              }}
              containerStyle={{
                backgroundColor: Theme.primary,
                paddingVertical: Theme.hp('1.2%'),
                borderRadius: 40,
              }}
              textStyle={{fontSize: Theme.fontSmall}}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  image: {
    marginTop: 10,
    borderRadius: 10,
    height: Theme.hp('15%'),
    alignSelf: 'center',
    width: Theme.wp('90%'),
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(69,69,69,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    height: Theme.hp('100%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
  title: {
    color: Theme.black,
    fontSize: 18,
    marginTop: Theme.hp('2%'),
  },
  desc: {
    color: Theme.black,
    marginTop: Theme.hp('2%'),
  },
});

export default Compaign;
