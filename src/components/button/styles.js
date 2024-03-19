import EStyleSheet from 'react-native-extended-stylesheet';

import {PRIMARYCOLOR, WHITECOLOR} from '../../theme'

export const styles = EStyleSheet.create({
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
