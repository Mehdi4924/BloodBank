import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {Card} from 'react-native-paper';
import PatientHeader from '../../../components/PatientHeader';
import Images from '../../../constants/Images';
import Theme from '../../../utils/Theme';

const PendingScreen = props => {
  return (
    <View style={styles.container}>
      <PatientHeader onBackPress={() => props.navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          style={{
            marginTop: Theme.hp('20%'),
            width: '94%',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: Theme.hp('6%'),
          }}>
          <Image
            source={Images.pending2}
            style={{
              height: Theme.hp('30%'),
              width: Theme.wp('55%'),
              alignSelf: 'center',
              // marginTop: Theme.hp('10%'),
            }}
          />
          <Text
            style={{
              color: Theme.black,
              textAlign: 'center',
              fontSize: Theme.fontSmall,
            }}>
            Your Application is on Reveiewed
          </Text>
          <Pressable
            onPress={() => props.navigation.navigate('PatientDashboard')}>
            <Text style={{textAlign: 'center', color: Theme.black}}>
              We will contact back you soon
            </Text>
          </Pressable>
        </Card>
        <View style={{marginTop: Theme.hp('2%')}}></View>
      </ScrollView>

      {/* 
  
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 70,
    width: 70,
  },
});

export default PendingScreen;
