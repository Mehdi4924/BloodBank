import React, {Component} from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-paper';
import Theme from '../utils/Theme';

class FormInput extends Component {
  static propTypes = {
    error: PropTypes.any,
    iconName: PropTypes.string,
    containerStyle: PropTypes.any,
    icon_color: PropTypes.string,
    onPress_icon: PropTypes.func,
    ForgetPassword: PropTypes.func,
    forget: PropTypes.bool,
    iconName_s: PropTypes.string,
    text_input_container: PropTypes.any,
    predefineText: PropTypes.string,
    predefineContainer: PropTypes.any,
    predefineTextStyle: PropTypes.any,
    maxLength: PropTypes.any,
    iconStyle: PropTypes.any,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.any,
    keyboard: PropTypes.any,
    rightIconStyle: PropTypes.any,
  };
  render() {
    return (
      <View style={[this.props.containerStyle]}>
        {this.props.iconName_s !== undefined ? (
          <AntDesign
            color={this.props.icon_color}
            size={21}
            name={this.props.iconName_s}
            style={this.props.iconStyle}
          />
        ) : null}
        <View style={this.props.text_input_container}>
          {this.props.predefineText ? (
            <View style={this.props.predefineContainer}>
              <TextInput
                selectionColor={Theme.primary}
                placeholder={this.props.placeholder}
                {...this.props}
                onChangeText={onChangeText}
                autoCapitalize="none"
                error={false}
                theme={{colors: {background: 'transparent'}}}
                style={this.props.text}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
              />
            </View>
          ) : (
            <TextInput
              selectionColor={Theme.primary}
              placeholder={this.props.placeholder}
              {...this.props}
              returnKeyType="done"
              autoCapitalize="none"
              error={false}
              style={this.props.text}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              theme={{colors: {background: 'transparent'}}}
            />
          )}
        </View>
        {this.props.iconName !== undefined ? (
          <Entypo
            color={this.props.icon_color}
            onPress={this.props.onPress_icon}
            size={18}
            name={this.props.iconName}
            style={this.props.rightIconStyle}
          />
        ) : null}
      </View>
    );
  }
}
export default FormInput;
