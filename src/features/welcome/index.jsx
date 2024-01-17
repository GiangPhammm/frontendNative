import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import testImage from '../../static/images/testImage.png'

import {Button} from '../button';

/** @param {any} navigation */
export const Welcome = ({navigation}) => {
    return (
      <View style={styles.container}>
            <Image
                style={styles.image}
                source={testImage}
            />

            <Button 
                title='Create an account'
                onPress={() => navigation.navigate('Signup')}
            />

            <Text
                style={styles.signinText}
                onPress={() => navigation.navigate('Signin')}
            >
                {'Sign in'}
            </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#d4e1f1'
    },

    image: {
        flex: 1,
        width: 400,
        resizeMode: 'contain'
    },

    signinText: {
        color: '#000',
        fontSize: 16,
        marginTop: 15
    }
});