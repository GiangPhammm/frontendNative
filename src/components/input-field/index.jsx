import {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';

import * as globalStyles from '../../theme'

import {styles} from './styles';

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

/**
 * @typedef {object} Props
 * @prop {string} [placeholder]
 * @prop {string} value
 * @prop {(text: string) => void} action
 * @prop {boolean} [isPassword]
 */