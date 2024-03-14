import {Text} from 'react-native-paper';
import {Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {PRIMARYCOLOR, WHITECOLOR} from '../theme'

/** @param {Props} props */
export const Button = (props) => {
  const {
    onPress,
    title,
    style
  } = props;

  return (
    <Pressable
      style={[styles.primaryBtn, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = EStyleSheet.create({
  primaryBtn: {
    minWidth: '150rem',
    height: '40rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20rem',
    backgroundColor: PRIMARYCOLOR,
  },

  text: {
    fontSize: '18rem',
    fontWeight: '700',
    color: WHITECOLOR,
  },
});

/**
 * @typedef {object} Props
 * @prop {(event: import('react-native').GestureResponderEvent) => void} onPress
 * @prop {string} title
 * @prop {Record<string, string>} [style]
 */