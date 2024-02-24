import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import * as globalStyles from '../theme'

/** @param {Props} props */
export const InputField = (props) => {
  const {
    placeholder,
    value,
    action,
    isPassword,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.GRAY_03}
        underlineColor='transparent'
        theme={{colors: {primary: globalStyles.PRIMARYCOLOR}}}
        onChangeText={action}
        secureTextEntry={passwordVisible}
        right={isPassword && // if the field is password -> return eye icon
          <TextInput.Icon
            icon={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
            onPress={togglePasswordVisibility}
            color={globalStyles.PRIMARYCOLOR}
            size={18}
          />
        }
      />
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    marginBottom: 2,
  },

  inputText: {
    width: '300rem',
    height: '40rem',
    backgroundColor: globalStyles.GRAY_01,
    marginBottom: '10rem',
    fontSize: '14rem',
    borderWidth: '1rem',
    borderRadius: '5rem',
    borderColor: globalStyles.GRAY_02,
    color: globalStyles.BLACKCOLOR,
  },
});

/**
 * @typedef {object} Props
 * @prop {string} [placeholder]
 * @prop {string} value
 * @prop {(text: string) => void} action
 * @prop {boolean} [isPassword]
 */