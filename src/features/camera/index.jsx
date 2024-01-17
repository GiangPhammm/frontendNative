import {StyleSheet} from 'react-native'
import {RNCamera} from 'react-native-camera'

export const Camera = () => {
    return (
        <RNCamera
            style={styles.camera} 
        />
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        alignItems: 'center',
    }
});