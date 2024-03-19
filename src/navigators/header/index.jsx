import {IconButton} from 'react-native-paper';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import {PRIMARYCOLOR, WHITECOLOR} from '../../theme';

import {styles} from './styles';

export const Header = () => {
  const drawerNavigation = useNavigation();

	return ({
		title: '',
		headerTintColor: WHITECOLOR,
		headerShadowVisible: false,
		headerStyle: {
			backgroundColor: PRIMARYCOLOR,
		},
		headerLeft: () => (
			<IconButton
				style={styles.headerMenuIcon}
				icon='menu'
				iconColor={WHITECOLOR}
				size={30}
				onPress={() => {
				drawerNavigation.dispatch(DrawerActions.openDrawer())
				}}
			/>
		),
	})
}
