import {Text} from 'react-native-paper';
import {Pressable} from 'react-native';

import {styles} from './styles';

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

/**
 * @typedef {object} Props
 * @prop {(event: import('react-native').GestureResponderEvent) => void} onPress
 * @prop {string} title
 * @prop {Record<string, string>} [style]
 */