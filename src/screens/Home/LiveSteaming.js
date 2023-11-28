import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import VideoPlayer from 'react-native-video-player';
import Header from '../../components/Header';
import Theme from '../../utils/Theme';

const LiveSteaming = props => {
  const data = [
    {
      id: 0,
      videoName: '',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          text="Live Steaming"
          onBackPress={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: Theme.hp('1%'),
        }}>
        <View style={{width: Theme.wp('46%')}}>
          <VideoPlayer
            autoplay={true}
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            thumbnail={{uri: 'https://images.app.goo.gl/gtVsQKNN1mgWbZyN7'}}
          />
        </View>
        <View style={{width: Theme.wp('46%')}}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            thumbnail={{uri: 'https://images.app.goo.gl/gtVsQKNN1mgWbZyN7'}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: Theme.hp('1%'),
        }}>
        <View style={{width: Theme.wp('46%')}}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            thumbnail={{uri: 'https://images.app.goo.gl/gtVsQKNN1mgWbZyN7'}}
          />
        </View>
        <View style={{width: Theme.wp('46%')}}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            thumbnail={{uri: 'https://images.app.goo.gl/gtVsQKNN1mgWbZyN7'}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: Theme.hp('1%'),
        }}>
        <View style={{width: Theme.wp('96%')}} onPress={console.log('press')}>
          <VideoPlayer
            showDuration={true}
            fullScreenOnLongPress={true}
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            thumbnail={{uri: 'https://images.app.goo.gl/gtVsQKNN1mgWbZyN7'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: Theme.hp('1%'),
  },
  headerContainer: {
    backgroundColor: Theme.lightWhite,
    padding: Theme.wp('5%'),
    elevation: 5,
  },
});

export default LiveSteaming;
