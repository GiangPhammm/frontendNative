import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
    headerMenuIcon: {
        bottom: Platform.OS == 'ios' ? '7rem': '0'
    },
});