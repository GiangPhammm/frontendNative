import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginHorizontal: '10rem',
    },

    logo: {
        alignItems: 'center',
    },

    profile: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '20rem',
        marginTop: '30rem',
        alignItems: 'center', 
    },

    profileImage: {
        width: '50rem',
        height: '50rem',
    },

    profileName: {
        fontSize: '18rem',
        fontWeight: '700',
        marginLeft: '10rem',
    },

    drawerList: {
        marginTop: '20rem',
    },

    logoutButton: {
        position: 'relative',
        marginTop: 'auto',
    }
});