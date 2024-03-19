import EStyleSheet from 'react-native-extended-stylesheet';

import * as globalStyles from '../../theme'

export const styles = EStyleSheet.create({
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