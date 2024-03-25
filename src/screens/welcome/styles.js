import EStyleSheet from 'react-native-extended-stylesheet';
import {BLACKCOLOR} from '../../theme';

export const styles = EStyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        top: '0%',
        margin: '40rem'
    },

    section: {
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        height: '40%',
        top: '70%'
    },

    logo: {
        width: '50%',
        height: '40%',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    buttonText: {
        color: BLACKCOLOR,
        fontSize: '18rem',
        fontWeight: '700',
    },

    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20rem',
    },

    separator_line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },

    separator_text: {
        width: '130rem',
        textAlign: 'center',
        fontSize: '15rem',
    },

    connect: {
        flexDirection: 'row',
        marginTop: '10rem',
    },
});