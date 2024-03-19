// @ts-ignore
import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import {Icon} from 'react-native-paper';

import {styles} from './styles';

/** @param {Props} props */
export const CheckBox = (props) => {
  const {isChecked, title, action} = props;

	return ( 
		<View style={styles.container}> 
			<Pressable onPress={action}>
				{isChecked?
					<Icon
						source={'checkbox-outline'}
						size={13}
					/>
					:
					<Icon
						source={'checkbox-blank-outline'}
						size={13}
					/>
				}
			</Pressable>
			<Text style={styles.title}>{title}</Text> 
		</View> 
	); 
}; 

/**
 * @typedef {object} Props
 * @prop {(event: GestureResponderEvent)  => void} action
 * @prop {string} title
 * @prop {boolean} isChecked
 */