import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import {Card} from 'react-native-paper';
import {Btn} from '../../components/Btn';
import FormInput from '../../components/Text_input';
import Theme from '../../utils/Theme';

const GetHelp = () => {
  const [subscribe, setSubscribe] = useState('');
  const openNumber = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${(+92) 0423 7422 131}';
    } else {
      number = 'tel:${(+92) 0423 7422 131}';
    }
    Linking.openURL(number);
  };
  const openNumber1 = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${(+92) 0423 7422 140}';
    } else {
      number = 'tel:${(+92) 0423 7422 140}';
    }
    Linking.openURL(number);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            You can give blood at any of our blood donation venues all over the
            world. We have total sixty thousands donor centers and visit
            thousands of other venues on various occasions.
          </Text>
          <Card elevation={5} style={styles.card}>
            <Text style={styles.helpText}>Contact Our Help Center</Text>
            <Text style={styles.title}>Email:</Text>
            <Text style={styles.subtext}>Info@sundas.org</Text>
            <Text style={styles.title}>Office:</Text>
            <TouchableOpacity onPress={() => openNumber()}>
              <Text style={styles.subtext}>(+92) 0423 7422 131</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openNumber1()}>
              <Text style={styles.subtext}>(+92) 0423 7422 140</Text>
            </TouchableOpacity>
            <FormInput
              onChangeText={subscribe => setSubscribe(subscribe)}
              containerStyle={[styles.back, {justifyContent: 'flex-start'}]}
              text_input_container={styles.text_input_container}
              text={{borderBottomWidth: 0}}
              placeholder="Enter Your Email Address"
            />
            <Btn
              containerStyle={styles.btn}
              textStyle={styles.btnText}
              text="Subscribe"
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.hp('3%'),
  },
  text: {
    color: Theme.black,
    textAlign: 'center',
  },
  card: {
    padding: Theme.hp('3%'),
    marginTop: Theme.hp('3%'),
  },
  helpText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: Theme.black,
    fontSize: Theme.fontMedium,
  },
  title: {
    color: Theme.black,
    fontWeight: 'bold',
    fontSize: Theme.fontSmall,
    marginTop: Theme.hp('1%'),
  },
  subtext: {
    color: Theme.black,
    marginTop: Theme.hp('1%'),
  },
  text_input_container: {
    width: Theme.wp('80%'),
    borderRadius: 4,
  },
  back: {
    backgroundColor: Theme.inputBack,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'space-between',
    height: Theme.hp('7%'),
    marginVertical: Theme.hp('3%'),
  },
  btn: {
    backgroundColor: Theme.primary,
    borderRadius: 30,
    padding: Theme.hp('1.5%'),
  },
  btnText: {
    color: Theme.white,
    fontSize: Theme.fontSmall,
  },
});

export default GetHelp;
