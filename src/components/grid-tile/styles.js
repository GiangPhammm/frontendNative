import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {BLACKCOLOR, WHITECOLOR} from '../../theme';

export const styles = EStyleSheet.create({
	container: {
		flex: 1,
        margin: '16rem',
        height: '150rem',
        borderRadius: '8rem',
        elevation: 4,
        backgroundColor: WHITECOLOR,
        shadowColor: BLACKCOLOR,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},

    button: {
        flex: 1,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    content: {
        position: 'relative',
        flex: 1,
        padding: '16rem',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '8rem',
    },

    icon: {
        width: '100rem',
        height: '100rem',
    },

    title: {
        fontWeight: '700',
        fontSize: '15rem',
        marginTop: '8rem'
    },
}); 