import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../utils/Theme';

export default class Loader extends React.Component {
  static propTypes = {
    animating: PropTypes.bool,
    onBackPress: PropTypes.any,
  };
  render() {
    return (
      <Modal
        onRequestClose={this.props.onBackPress}
        visible={this.props.animating}
        transparent={true}>
        <ActivityIndicator
          style={{flex: 1}}
          size="large"
          color={Theme.primary}
          animating={this.props.animating}
        />
      </Modal>
    );
  }
}
