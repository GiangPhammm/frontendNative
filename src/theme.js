// All colors must be defined here
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Calculate rem ratio with the most common mobile screen size
export const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 390});

export const PRIMARYCOLOR = '#FF9F49';
export const SECONDARY_COLOR1 = '#FFCF72'; // yellow
export const SECONDARY_COLOR2 = '#8DBEFF'; // blue
export const SECONDARY_COLOR3 = '#71b290'; // green
export const SECONDARY_COLOR4 = '#D19F85'; // beige
export const MAIN_BG_COLOR = '#FFFAF5'; // cream
export const BLACKCOLOR = '#000000';
export const WHITECOLOR = '#FFFFFF';
// Naming after specific color in Figma
export const GRAY_01 = '#F6F6F6'; 
export const GRAY_02 = '#E8E8E8';
export const GRAY_03 = '#BDBDBD';

export const globalStyle = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: MAIN_BG_COLOR,
    },

    mainContent: {
        alignItems: 'center',
        margin: '40rem',
        color: BLACKCOLOR,
    },

    logo: {
        resizeMode: 'contain'
    },

    heading1: {
        fontSize: '25rem',
        fontWeight: '700',
        lineHeight: '51rem',
        paddingVertical: '8rem',
        textAlign: 'center',
        color: BLACKCOLOR
    },

    paragraph: {
        fontSize: '16rem',
        fontWeight: '400',
        lineHeight: '20rem',
        textAlign: 'center',
        color: BLACKCOLOR
    },

    section: {
        marginTop: '30rem',
    },

    inlineLink: {
        fontSize: '15rem',
        color: SECONDARY_COLOR3
    },

    authHelper: {
        marginTop: '10rem',
        marginHorizontal: '30rem',
        fontWeight: '700',
        color: BLACKCOLOR,
    },

    authHelper_text: {
        marginTop: '5rem',
        fontSize: '15rem',
        textAlign: 'center',
        color: BLACKCOLOR,
    },

});
