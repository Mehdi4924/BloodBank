import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './src/navigations/routes';
import store from './src/store/store';

const App = () => {
  return (
    <Provider style={{flex: 1}} store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
