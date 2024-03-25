import EStyleSheet from 'react-native-extended-stylesheet';

import {
    SECONDARY_COLOR3,
    BLACKCOLOR,
} from '../../theme';

export const styles = EStyleSheet.create({
    buttonSection: {
        marginTop: '15rem',
    },

    checkbox: {
        width: '2rem',
    },

    agb: {
        flexDirection: 'row',
    },

    agbLink: {
        fontSize: '13rem', 
        color: SECONDARY_COLOR3,
        fontWeight: '700',
    },

    inlineLink: {
        top: '4rem',
        fontSize: '18rem',
        color: BLACKCOLOR
    },
});
