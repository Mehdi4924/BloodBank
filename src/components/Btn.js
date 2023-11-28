import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

class Btn extends Component {
  static propTypes = {
    text: PropTypes.string,
    containerStyle: PropTypes.any,
    onPress: PropTypes.func,
    textStyle: PropTypes.any,
  };
  render() {
    return (
      <TouchableOpacity
        style={this.props.containerStyle}
        onPress={this.props.onPress}>
        <Text
          style={[{color: 'white', textAlign: 'center'}, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export {Btn};
