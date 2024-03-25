import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    intro: {
        marginTop: '10rem',
    },

    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20rem',
        marginHorizontal: '60rem'
    },

    separator_line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
    },

    separator_text: {
        width: '40rem',
        textAlign: 'center',
        fontSize: '16rem',
    },

    connect: {
        flexDirection: 'row',
        marginTop: '10rem',
    },

    buttonSection: {
        marginTop: '15rem',
    },

    checkboxWrapper: {
        width: '100%',
    },

    checkbox: {
        width: 2,
    },
});
