import {IconButton} from 'react-native-paper';
import {Platform} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {PRIMARYCOLOR, WHITECOLOR} from '../theme';

export const Header = () => {
  const drawerNavigation = useNavigation();

  return ({
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

export const styles = EStyleSheet.create({
  headerRightSection: {
    display: 'flex',
    flexDirection: 'row'
  },

  headerMenuIcon: {
    bottom: Platform.OS == "ios" ? '7rem': '0'
  },

  headerIcon: {
    margin: 0,
    padding: 0,
    width: '28rem'
  },
});